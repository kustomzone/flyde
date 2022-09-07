module.exports = {
  id: 'Add',
  inputs: {
    a: {mode: 'required', type: 'number'},
    b: {mode: 'required', type: 'number'}
  },
  outputs: {
    r: 'number'
  },
  fn: (inputs, outputs) => {
    outputs.r.next(inputs.a + inputs.b);
  }
}
