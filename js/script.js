// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of a triangle.
 */
function calculateArea() {
      const a = parseFloat(document.getElementById('a').value);
      const b = parseFloat(document.getElementById('b').value);
      const h = parseFloat(document.getElementById('h').value);

      if (isNaN(a) || isNaN(b) || isNaN(h)) {
        document.getElementById('result').textContent = "Please enter valid numbers for all dimensions.";
        return;
      }

      const area = ((a + b) * h) / 2;
      document.getElementById('result').textContent = `Area: ${area.toFixed(2)} cm²`;
    }