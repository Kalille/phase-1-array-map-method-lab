const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (array) => {
  return tutorials.map(words=>{
  const letters = words.split(" ");const mapped = letters.map(cap=> cap.charAt(0).toUpperCase() + cap.slice(1));
  const result = mapped.join(" ")
  return result
  })
}