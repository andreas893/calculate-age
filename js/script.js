"use strict";

const birthYear = prompt("Enter your birthyear:");

const birthYearNum = Number(birthYear);

const currentYear = new Date().getFullYear();

const age = currentYear - birthYearNum;

console.log(`You are ${age} years old`);
