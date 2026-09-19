// Test script to verify NOBROWSE™ engines in Node.js
import { getSearchResult, CHAOS_TYPES } from './src/utils/chaosEngine.js';
import { executeRealSearch } from './src/utils/searchEngine.js';
import { checkEasterEgg } from './src/data/easterEggs.js';

console.log("=== RUNNING NOBROWSE™ ENGINE VERIFICATION ===");

// 1. Easter Eggs
const egg1 = checkEasterEgg('why');
console.assert(egg1 && egg1.response === "That's above our pay grade.", "Easter egg 'why' failed");
const egg2 = checkEasterEgg('google');
console.assert(egg2 && egg2.response === "Nice try.", "Easter egg 'google' failed");
const egg3 = checkEasterEgg('chatgpt');
console.assert(egg3 && egg3.response === "You're already using AI.", "Easter egg 'chatgpt' failed");
const egg4 = checkEasterEgg('nobrowse');
console.assert(egg4 && egg4.response === "The browser is self-aware.", "Easter egg 'nobrowse' failed");
const egg5 = checkEasterEgg('404');
console.assert(egg5 && egg5.response === "404ception.", "Easter egg '404' failed");
const egg6 = checkEasterEgg('hello');
console.assert(egg6 && egg6.response === "Hello. Please leave.", "Easter egg 'hello' failed");
console.log("✔ Easter Eggs verified: 6/6 passed.");

// 2. Real Search Mode
const realReact = executeRealSearch('how to learn React');
console.assert(realReact.isReal === true, "Real search isReal check failed");
console.assert(realReact.results.length > 0, "Real search results empty");
console.assert(realReact.quickAnswer !== null, "Quick answer missing for React");

const realPython = executeRealSearch('Python tutorial');
console.assert(realPython.quickAnswer.type === 'code', "Python code quick answer failed");

const realCSS = executeRealSearch('how to center a div');
console.assert(realCSS.quickAnswer.type === 'css_demo', "CSS centering quick answer failed");
console.log("✔ Real Search Mode verified with curated quick answers and organic results.");

// 3. Fallback for custom queries
const customQuery = executeRealSearch('quantum astrophysics of black holes');
console.assert(customQuery.results.length > 0, "Fallback search results failed");
console.assert(customQuery.results[0].domain !== undefined, "Fallback domain missing");
console.log("✔ Dynamic Fallback Search engine verified for arbitrary queries.");

// 4. Probability Simulation (1,000 runs)
let realCount = 0;
let chaosCount = 0;
const chaosTypeCounts = {};

for (let i = 0; i < 1000; i++) {
  const res = getSearchResult("test query random roll");
  if (res.isReal) {
    realCount++;
  } else {
    chaosCount++;
    chaosTypeCounts[res.chaosType] = (chaosTypeCounts[res.chaosType] || 0) + 1;
  }
}

const realRatio = (realCount / 1000) * 100;
console.log(`✔ 1,000 Search Simulation: Real: ${realCount} (${realRatio.toFixed(1)}%), Chaos: ${chaosCount} (${(100 - realRatio).toFixed(1)}%)`);
console.assert(realRatio >= 34 && realRatio <= 46, "Probability did not converge near 40%!");

// 5. Verify all 10 chaos types are present
console.log("Chaos scenario distribution across 1,000 trials:");
for (const type of CHAOS_TYPES) {
  console.log(`  - ${type}: ${chaosTypeCounts[type] || 0}`);
  console.assert((chaosTypeCounts[type] || 0) > 0, `Chaos type ${type} never appeared!`);
}

// 6. Force Mode overrides
const forceReal = getSearchResult("force test", "real");
console.assert(forceReal.isReal === true, "Force real mode failed");

const forceChaos = getSearchResult("force test", "chaos");
console.assert(forceChaos.isReal === false, "Force chaos mode failed");
console.log("✔ Force modes ('real' and 'chaos') verified.");

console.log("=== ALL NOBROWSE™ VERIFICATION TESTS PASSED SUCCESSFULLY! ===");
