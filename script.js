
let sum = (num1, num2) => {
    let answer = num1 + num2;
    return answer = checkLength(answer);
}

let subtract = (num1, num2) => {
    let answer = num1 - num2;
    return answer = checkLength(answer);
}

let multiply = (num1, num2) => {
    let answer = num1 * num2;
    return answer = checkLength(answer);
}

//check length, if length is good then return,  if length is too big check for decimal and round appropriately or return as many whole nums as possible
let divide = (num1, num2) => {
    if (num2 == 0) return "Den. != 0";
    else {
        let answer = num1 / num2;
        return answer = checkLength(answer);
    }
    
    
}

let checkLength = (answer) => {
    stringAnswer = answer.toString();
    if(stringAnswer.length > 8){
        //answer is whole number, keep 8th int.
        if(answer % 1 === 0){
            if (answer > 0)return answer = ">99999999";
            else return answer = "<-99999999"
        }
        //answer is decimal, figure out where to round.
        else{
            let numDecimal = "";
            // if answer rounds to zero, we want 7 spaces left of decimal because the leading zero -> 0.1234567
            if(Math.round(answer) == 0){
                numDecimal = 7;
                return Number((answer).toFixed(numDecimal)) 
            }
            //otherwise we want 8 total nums, with 
            else{
                numDecimal = (Math.round(answer));
                if(numDecimal < 0) numDecimal *= -1;
                numDecimal = numDecimal.toString();
                numDecimal = 8 - numDecimal.length;
                return Number((answer).toFixed(numDecimal))
            }    
        }
    }
    else {
        return answer;
    }
}

let operate = (operator, num1, num2) => {
    if (operator == '-') return subtract(num1, num2);
    else if (operator == '+') return sum(num1, num2);
    else if (operator == '/') return divide(num1, num2);
    else if (operator == '*') return multiply(num1, num2);
}

let resetCalculator = () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue.textContent = "0.";
}

let addDecimal = () => {
    // start with figuring which number to start with
    //if operator is  a blank string, start with num1
    if(operator == ""){
        //if num1 is already a decimal, exit
        if (num1 == "") num1+= ".";
        else if((parseInt(num1) % 1 != 0)) return;
        //else add decimal to num1
        else{
            num1 += ".";
        }

    }else if(operator != ""){
        if(num2 == "") num2+= ".";
        else if ((parseInt(num2) % 1 != 0)) return;
        else {
            num2 += ".";
        }
    }
}

let changeSign = () => {
    if(operator == ""){
        if(num1 == "" || num1 == "0") return;
        else if (parseInt(num1) > 0) num1 = "-" + num1;
        else if (parseInt(num1) < 0) {
            let tempNum1 = parseInt(num1) * -1;
            num1 = tempNum1.toString();
        }
        displayValue.textContent = num1;
    }
    else if (operator != ""){
        if(num2 == "" || num2 == "0") return;
        else if (parseInt(num2) > 0) num2 = "-" + num2;
        else if (parseInt(num2) < 0){
            let tempNum2 = parseInt(num2) * -1;
            num2 = tempNum2.toString();
        }
        displayValue.textContent = num2;
    }
}

//would be better to create functions for the conditions below and then move the updateDisplay conditions into the onClick event listener.
//lets first update the values, then update the display
let updateDisplay = (buttonPress) => {
    //if a number has been entered
    if(!isNaN(+buttonPress)){
        //if an operatore hasn't been press, we are working with num1
        if(operator == ""){
            num1 += buttonPress;
            displayValue.textContent = num1;
            console.log("number 1 updated")
        }
        //operator has been pressed, updating num2
        else if(operator != ""){
            num2 += buttonPress;
            displayValue.textContent = num2;
            console.log("number 2 updated")
        }
    }
    // if an operator has been entered
    else if (buttonPress == "+" ||buttonPress == "-" ||buttonPress == "*" ||buttonPress == "/") {
        if (operator == ""){
            operator = buttonPress;
        }
        // performs calculations so that more operations can be performed
        else if(operator != ""){
            num1 = operate(operator, +num1, +num2)
            displayValue.textContent = num1;
            num2 = "";
            operator = buttonPress;
        } 
    }
    else if (buttonPress == "clear") resetCalculator();
    else if (buttonPress == "=") {
        if( num1 != "" && num2 != "" && operator != ""){
            num1 = operate(operator, +num1, +num2)
            displayValue.textContent = num1;
            num2 = "";
            operator = "";
            console.log("results calculated")
        }

    }
    else if (buttonPress == "."){
        addDecimal()
    }
    else if (buttonPress == "(-)"){
        changeSign()
    }
}


//starting values
let num1 = "";
let num2 = "";
let operator = "";

const displayValue = document.querySelector('#display-value');
displayValue.textContent = "0.";

//create node list 'buttons'
const buttons = document.querySelectorAll('button');
// use forEach to iterate through each button
buttons.forEach((button) => {
    // updating the display if the click value is a number.
    button.addEventListener('click', () => {
        updateDisplay(button.id)
        
        console.log(`num1 = ${num1}`)
        console.log(`num2 = ${num2}`)
        console.log(`operator = ${operator}`)
        
    });
});
