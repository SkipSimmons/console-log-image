const atob = require('atob');
const dataset = require('./dataset');
globalThis.atob = atob;

const origConsoleLog = console.log;
console.log = (text, ...css) => {
    let expectedText = ('\n' + '%c　'.repeat(36)).repeat(28);
    if(text !== expectedText) {
        origConsoleLog('text does not match.');
        origConsoleLog('Expected:', expectedText);
        origConsoleLog('Actual:', text);
        return;
    }

    if(dataset.length !== css.length) {
        origConsoleLog('css data length does not match.');
        origConsoleLog('Expected:', dataset.length);
        origConsoleLog('Actual:', css.length);
        return;
    }

    for(let i = 0; i < dataset.length; i++) {
        const expected = dataset[i];
        const actual = css[i];
        const parse = /background-color:rgba\((\d+,\d+,\d+,\d(\.\d+)?)\)/.exec(actual);
        
        if(!parse) {
            origConsoleLog('wrong css format');
            origConsoleLog('Index:', i);
            origConsoleLog('Content:', actual);
            return;
        }
        const data = parse[1].split(',');
        if(expected[3] === 0 && data[3] === "0") {
            continue;
        }

        if(expected.join() !== data.join()) {
            origConsoleLog('wrong css data');
            origConsoleLog('Index:', i);
            origConsoleLog('Expected:', expected.join());
            origConsoleLog('Actual:', data.join());
        }
    }
    origConsoleLog('all tests passed successfully');
};

require('./main');
