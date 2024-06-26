module.exports = {
  id: "Add1",
  inputs: {
    n: { mode: "required", type: "number" },
  },
  outputs: {
    r: "number",
  },
  run: (inputs, outputs) => {
    outputs.r.next(inputs.n + 1);
  },
};
