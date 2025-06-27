var secval = 0;
let count = 0;
const question = document.getElementById('quest');
  const b1 = document.getElementById('bclear');
 b1.addEventListener("click", function(){
   question.value = '';
   ans.value = '';
   
 })
 const b1clear = document.getElementById('b1clear');
 b1clear.addEventListener("click", function(){
  val = question.value ;
  val = val.slice(0,-1);
  question.value = val;

 
 })
 
 

const equal = document.getElementById('bequal');
equal.addEventListener("click", function () {
  // Tab to edit
   var ans = document.getElementById('ans');
 let exp = question.value;
 console.log(eval(exp));
 ans.value = eval(exp);
 
})

 
 /*


const bsub = document.getElementById('bsub');
bsub.addEventListener("click", function(){
 
var ans = document.getElementById('ans');
let firstval = question.value;
 ans.value+= firstval;
 ans.value += '-';
 question.value = " ";
})


const bproduct = document.getElementById('bproduct');
bproduct.addEventListener("click", function(){
  
var ans = document.getElementById('ans');
let firstval = question.value;

 ans.value+= firstval;

 ans.value += '*';
 question.value = " ";
})

const bdiv = document.getElementById('bdiv');
bdiv.addEventListener("click", function(){
  
  
var ans = document.getElementById('ans');
let firstval = question.value;

 ans.value+= firstval;

 ans.value += '/';
 question.value = " ";
})
*/