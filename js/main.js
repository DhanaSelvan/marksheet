
const compTh = prompt("Enter the Compiler Design Theory Mark");
const compPar = prompt("Enter the Compiler Design Partical Mark");
const ai = prompt("Enter the Artifical Intelligence Mark");
const iot = prompt("Enter the Iot Mark");
const mcTh = prompt("Enter the Mobile Computing Theory Mark");
const mcPar = prompt("Enter the Mobile Computing Partical Mark");
const oe = prompt("Enter the Open Elective Mark");

    // const compTh = document.getElementById('compilerTh').value;
    // const compPar = document.getElementById('compilerPar').value;
    // const ai = document.getElementById('AI').value;
    // const iot = document.getElementById('iot').value;
    // const mcTh = document.getElementById('mcTh').value;
    // const mcPar = document.getElementById('mcPar').value;
    // const oe = document.getElementById('oe').value;

console.log(compTh, compPar, ai, iot, mcTh, mcPar, oe);

var sub1th = document.getElementById('sub1-th');
var sub2th = document.getElementById('sub2-th');
var sub3th = document.getElementById('sub3-th');
var sub4th = document.getElementById('sub4-th');
var sub5th = document.getElementById('sub5-th');
console.log(sub1th, sub2th, sub3th, sub4th, sub5th)

sub1th.innerText = Number(compTh);
sub2th.innerText = Number(ai);
sub3th.innerText = Number(iot);
sub4th.innerText = Number(mcTh);
sub5th.innerText = Number(oe);

var sub1par = document.getElementById('sub1-par');
var sub4par = document.getElementById('sub4-par');

sub1par.innerText = compPar;
sub4par.innerText = mcPar;

var sub1Tot = Number(compTh)+Number(compPar);
var sub2Tot = Number(ai);
var sub3Tot = Number(iot);
var sub4Tot = Number(mcTh)+Number(mcPar);
var sub5Tot = Number(oe);

document.getElementById('sub1-tot').innerHTML = sub1Tot;
document.getElementById('sub2-tot').innerHTML = sub2Tot;
document.getElementById('sub3-tot').innerHTML = iot;
document.getElementById('sub4-tot').innerHTML = sub4Tot;
document.getElementById('sub5-tot').innerHTML = sub5Tot;

var grTotal = sub1Tot + sub2Tot + sub3Tot + sub4Tot + sub5Tot;
document.getElementById('gr-total').innerHTML = grTotal;

if(sub1Tot>=50 && sub2Tot>=50 && sub3Tot>=50 && sub4Tot>=50 && sub5Tot>=50) {
    document.getElementById('result').innerText = 'Pass'
} else {
    document.getElementById('result').innerText = 'Fail'
}

var percent = grTotal/5;
console.log(percent)
document.getElementById('percent').innerHTML = percent;

var grade = '';
if(percent>=90) {
    grade = 'O'
} else if (percent>=80 && percent<90) {
    grade = 'A+'
} else if (percent>=70 && percent<79) {
    grade = 'A'
} else if (percent>=60 && percent<69) {
    grade = 'B+'
} else if (percent>=55 && percent<59) {
    grade = 'B'
} else if (percent>=50 && percent<54) {
    grade = 'C'
} else {
    grade = 'Re'
}
document.getElementById('grade').innerText = grade;
