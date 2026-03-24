export async function geometry(p) {
  const vector = p.tokens.map(t => t.length);

  const density =
    p.tokens.length > 0
      ? p.tokens.length / (p.length + 1)
      : 0;

  return {
    vector,
    tokenCount: p.tokens.length,
    patternDensity: density
  };
}
