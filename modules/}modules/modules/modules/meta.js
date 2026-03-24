export function meta(fieldOutput) {
  const length = fieldOutput.length;

  let driftRisk = "LOW";

  if (length > 800) driftRisk = "HIGH";
  else if (length > 400) driftRisk = "MEDIUM";

  return {
    confidence: Math.min(1, length / 500),
    driftRisk,
    valid: driftRisk !== "HIGH"
  };
}
