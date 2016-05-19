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
    var fibonacci = [1,2];
    var sum = 0;
    for(i = 1; i < input2; i++){
        if(fibonacci[i] > input2){
            break;
        }
        fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    }
    for(i = 0; i < fibonacci.length; i++){
        if(fibonacci[i] % 2 === 0){
            sum+=fibonacci[i];
        }
    }
    document.getElementById('answer2').innerHTML = sum;
    return false;
}

var isPrime = function(number){
    //apparently 4 is a prime number!? Fix this
    for(i=2;i<number/2;i++){
        if(number % i === 0){
            return false;
        }
    }
    return true; 
}

function problem3() {
    var input3 = document.getElementById('problem3_input').value;
    test_answer = isPrime(input3);

    if(test_answer === true){
        document.getElementById('answer3').innerHTML = "That's a prime!";
    } else{
        document.getElementById('answer3').innerHTML = "That's not a prime :-(";
    }
    return false;
}
