function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === "HELLO!") {
    console.log('YES INDEED!');
  } else if (string === "hello!") {
    console.log('I can't hear you!');
  } else if (string === "I love you, Grandma.") {
    console.log("I love you, too.")
  }
}