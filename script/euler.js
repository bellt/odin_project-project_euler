/*function init() {
    var form1 = document.getElementById('form_problem1');
    form1.addEventListener('submit',problem1,false);
}
function problem1(e) {
    alert('it worked!');
    document.getElementById('answer1').innerHTML = 'the answer';
    e.preventDefault();
    return false;
}*/
function problem1() {
    var input1 = document.getElementById('problem1_input').value;
    var sum = 0;
    for(var i = 0; i < input1; i++){
        if(i % 3 === 0){
            sum += i;
        } else if(i % 5 === 0){
            sum += i;
        }
    }
    document.getElementById('answer1').innerHTML = sum;
    return false;
}

function problem2() {
    var input2 = document.getElementById('problem2_input').value;
    document.getElementById('answer2').innerHTML = input2;
    return false;
}

function problem3() {
    var input3 = document.getElementById('problem3_input').value;
    document.getElementById('answer3').innerHTML = input3;
    return false;
}
