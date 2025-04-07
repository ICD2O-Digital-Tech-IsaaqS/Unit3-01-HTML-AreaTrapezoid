// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  let base = parseInt(document.getElementById('base-of-triangle').value);
  let height = parseInt(document.getElementById('height-of-triangle').value);

  // process
  let area = base * height / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}