import { perception } from "./perception.js";
import { geometry } from "./geometry.js";
import { field } from "./field.js";
import { meta } from "./meta.js";

export async function runMCE(input) {
  const p = perception(input);
  const g = await geometry(p);
  const f = await field(g);
  const m = meta(f);

  return {
    perception: p,
    geometry: g,
    field: f,
    meta: m
  };
}
