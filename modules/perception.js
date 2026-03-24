export function perception(input) {
  return {
    raw: input,
    tokens: input.split(/\s+/),
    length: input.length,
    timestamp: Date.now()
  };
}
