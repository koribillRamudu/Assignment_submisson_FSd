class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
      // Retry on MultiplicatorUnitFailure
    }
  }
}

console.log(reliableMultiply(8, 8)); // → 64



const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };
  
  function withBoxUnlocked(body) {
    let wasLocked = box.locked;
    if (wasLocked) {
      box.unlock();
    }
    try {
      body();
    } finally {
      if (wasLocked) {
        box.lock();
      }
    }
  }
  
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(() => {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  
  console.log(box.locked); // → true


  console.log("3........")
  let regexp1 = /ca[rt]/;
  let regexp2 = /pr?op/;
  let regexp3 = /ferr(et|y|ari)/;
  let regexp4 = /\b\w+ious\b/;
  let regexp5 = /\s[.,:;]/;
  let regexp6 = /\b\w{7,}\b/;
  let regexp7 = /\b[^eE\s]+\b/;
  function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
  }
  
  verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
  verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
  verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
  verify(/\b\w+ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
  verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
  verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
  verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "bedrøvet abe", "BEET"]);
  
  
console.log("4.........")
let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}

for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}


