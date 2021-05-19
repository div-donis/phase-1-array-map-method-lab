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

/*function titleCased(tutorials){
  const text = tutorials.split(' ');
  const output = [];
  for (let i = 0; i < text.length; i++){
    output.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
  }
  return output.join(' ');
  
}

function titleCased(){
  const text = tutorials.map(tutorials => tutorials.toUpperCase());
  return text;
}
*/

/*function titleCased(){
  const text = tutorials.map(swap => {swap.split(' ')
    for (let i = 0; i < swap.length; i++) {
      swap[i] = swap[i][0].toUpperCase() + swap[i].slice(1)
    }
    console.log(swap.join(' '))
  })
  return text;
}*/



function titleCased() {
  const text = tutorials.map((swap) => {
    const newtext = swap.split(' ').map((tutor) => tutor[0].toUpperCase() + tutor.slice(1));
    return newtext.join(' ');
  });
  return text;
}
titleCased(tutorials);
