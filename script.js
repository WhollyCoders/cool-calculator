console.log('Hello Christina...');
output = document.getElementById('output');
buttons = document.getElementsByTagName('button');
clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function(){
  output.innerHTML = '0';
});

oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', function(){
  output.innerHTML = parseInt(output.innerHTML) / -1;
});

percentButton = document.getElementById('btn-percent');
percentButton.addEventListener('click', function(){
  output.innerHTML = parseInt(output.innerHTML) / 100;
});
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(){console.log('Button Clicked...')});
// }
