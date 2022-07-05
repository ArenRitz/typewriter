const sentence = "hello there from lighthouse labs";

let interval = 0

const typewriter = (str) => {
let index = 0;
let lastCharIndex = str.length;
  for (let i of str) {
    setTimeout( () => {
      index++
      process.stdout.write(i);
      if (index === lastCharIndex) {
      console.log("")
    }
    }, interval);
  interval += 50;
  }
  
  
}

typewriter(sentence);
typewriter(sentence);
typewriter(sentence);


