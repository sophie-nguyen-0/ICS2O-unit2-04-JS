// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit2-04-JS/sw.js", {
    scope: "/ICS2O-unit2-04-JS/",
  })
}

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("length-of-rectangle").value)
  const width = parseInt(document.getElementById("width-of-rectangle").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
