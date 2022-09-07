module.exports = {"id":"ScanValue","inputs":{"value":{"mode":"required","type":"any"},"initial":{"mode":"required","type":"any"},"onValue":{"mode":"required","type":"part({\"prevValue\": \"any\", \"currValue\": \"any\"}|{\"newVal\": \"any\"})"}},"outputs":{"r":{"type":"any"}},"completionOutputs":["none"],"reactiveInputs":["value"],"fn":function (inputs, outputs, adv) { const { state, insId, execute, onCleanup, onArg } = adv;
const {initial, value, onValue } = inputs;
const {r} = outputs;

const prevValue = state.get("prevValue") || initial;
  
const newVal = dynamicOutput();
const prevValueArg = dynamicPartInput();
const currValue = dynamicPartInput();
const clean = execute(
onValue,
{ prevValue: prevValueArg, currValue },
{ newVal },
`${insId}-scan`
);

log({value, prevValue});

const s = newVal.subscribe((val) => {
    state.set("prevValue", val);
    r.next(val);
    s.unsubscribe();
    clean();
});

currValue.subject.next(value);
prevValueArg.subject.next(prevValue);

 }}