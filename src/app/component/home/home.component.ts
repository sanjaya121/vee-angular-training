import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arr = [1, 2, 3, 4, 56, 77];
  array = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
  height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  // height = [1, 2]
  constructor() { }

  ngOnInit(): void {
    // this.findMissingNUmber(this.arr);
    // this.uniqueArray(this.array);
    // this.maxArea(this.height);
    this.rotateImage(this.matrix)
  }
  //finding Missing Number
  // findMissingNUmber = (arr) => {
  //   var missing = []
  //   let minNumber = Math.min(...arr);
  //   let maxNumber = Math.max(...arr);
  //   console.log(minNumber, maxNumber)
  //   for (var i = minNumber; i <= maxNumber; i++) {
  //     if (arr.indexOf(i) < 0) {
  //       missing.push(i)
  //     }
  //   }
  //   console.log(missing);
  // }



  // remove duplicate
  // uniqueArray = (arr) => {
  //   let unique = arr.filter((array, index) => {
  //     return arr.indexOf(array) == index;

  //   })
  //   console.log(unique);
  // }
  /*
    You are given an integer array height of length n. 
    There are n vertical lines drawn such that the 
    two endpoints of the ith line are (i, 0) and (i, height[i]).
  
  Find two lines that together with the x-axis form 
  a container, such that the container contains the most water.
  
  Return the maximum amount of water a container can store.
  
  Notice that you may not slant the container.
  
  */

  // maxArea = (height) => {
  //   let area = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     for (let j = 0; j < height.length; j++) {
  //       area = Math.max(area, (j - i) * Math.min(height[i], height[j]))
  //     }
  //   }
  //   console.log(area);
  //   console.log(Math.min(4, 5))
  // }

  // Rotate Image



  /**
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   */
  rotateImage = function (matrix) {
    var n = matrix.length;
    var n2 = Math.floor(n / 2);
    // 1 2 3     7 8 9
    // 4 5 6  => 4 5 6
    // 7 8 9     1 2 3
    for (var i = 0; i < n2; i++) {
      for (var j = 0; j < n; j++) {
        this.swap(matrix, i, j, n - 1 - i, j);
      }
    }
    // 7 8 9     7 4 1
    // 4 5 6  => 8 5 2
    // 1 2 3     9 6 3
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        this.swap(matrix, i, j, j, i);
      }
    }
    console.log(matrix);
  };

  swap = function (matrix, x1, y1, x2, y2) {
    var tmp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = tmp
  }


}