const { perception } = require("./perception.js");
const { geometry } = require("./geometry.js");
const { field } = require("./field.js");
const { meta } = require("./meta.js");

async function runMCE(input) {
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

module.exports = { runMCE };
