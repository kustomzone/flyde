module.exports = {"id":"isLess","inputs":{"n1":{"mode":"required","type":"any"},"n2":{"mode":"required","type":"any"}},"outputs":{"true":{"type":"any"},"false":{"type":"any"}},"customViewCode":"","completionOutputs":["true","false"],"fn":function (inputs, outputs, adv) { const { n1, n2 } = inputs;
      
if (n1 < n2) {
      outputs.true.next(n1);
} else {
      outputs.false.next(n1);
}
// magic here
       }}