'use strict';

// Get Query Selector for the two screen elements and all the buttons ✅

// Screen Elements
const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');

// Buttons
const clearBtn = document.querySelector('.button__clear');
const backBtn = document.querySelector('.button__back');

const Btn1 = document.querySelector('.button__1');
const Btn2 = document.querySelector('.button__2');
const Btn3 = document.querySelector('.button__3');
const Btn4 = document.querySelector('.button__4');
const Btn5 = document.querySelector('.button__5');
const Btn6 = document.querySelector('.button__6');
const Btn7 = document.querySelector('.button__7');
const Btn8 = document.querySelector('.button__8');
const Btn9 = document.querySelector('.button__9');

const divideBtn = document.querySelector('.button__divide');
const multiplyBtn = document.querySelector('.button__multiply');
const minusBtn = document.querySelector('.button__minus');
const decimalBtn = document.querySelector('.button__decimal');
const Btn0 = document.querySelector('.button_0');
const equalsBtn = document.querySelector('.button__equalsTo');
const addBtn = document.querySelector('.button__add');

// Create functions for add, subtract, multiply, divide ✅

// Convert into arrow functions ✅

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers. ✅

const operate = (operator, num1, num2) => {
    if(operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    }
}

//  Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

const firstNumber = [];

const populateDisplay = () => {
    
}

const allNumberBtns = document.querySelectorAll('.num');

allNumberBtns.forEach(element => element.addEventListener('click', populateDisplay))