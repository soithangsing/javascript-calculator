'use strict';

let firstOperand = ''
let secondOperand = ''
let currentOperation = null;
let shouldResetScreen = false;

// Get Query Selector for the two screen elements and all the buttons ✅

// Screen Elements
const calculation = document.getElementById('calculation');
const result = document.getElementById('result');

// Buttons
const allNumberBtns = document.querySelectorAll('[data-number]');
const allOperatorBtns = document.querySelectorAll('[data-operator]');

const clearBtn = document.getElementById('button__clear');
const backBtn = document.getElementById('button__back');
const equalsBtn = document.getElementById('button__equalsTo');
const decimalBtn = document.getElementById('button__decimal');

equalsBtn.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
decimalBtn.addEventListener('click', appendPoint)
backBtn.addEventListener('click', deleteNumber)

// Join and convert to number to get first operation number

allNumberBtns.forEach(element => element.addEventListener('click', () => appendNumber(element.textContent)));

allOperatorBtns.forEach(element => element.addEventListener('click', () => setOperation(element.textContent)))
//  Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

function appendNumber (number) {
        if (result.textContent === '0' || shouldResetScreen) resetScreen()
        result.textContent += number;
}

function resetScreen() {
    result.textContent = ''
    shouldResetScreen = false
}

function clear() {
    result.textContent = '0'
    calculation.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function appendPoint() {
    if(shouldResetScreen) resetScreen()
    if(result.textContent === '') result.textContent = '0'
    if(result.textContent.includes('.')) return
    result.textContent += '.'
}

function deleteNumber() {
    result.textContent = result.textContent.toString().slice(0, -1);
}

function setOperation (operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = result.textContent;
    currentOperation = operator;
    calculation.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && result.textContent === '0') {
        alert('You cannot divide by 0!')
        return
    }
    secondOperand = result.textContent
    result.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    calculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) /  1000
}

// Create functions for add, subtract, multiply, divide ✅

// Convert into arrow functions ✅

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers. ✅

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }