const oneDigit = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};
const twoDigit = {
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
};
const twoDigitLast = {
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety",
};
const highDigit = {
  1: "",
  2: "Thousand ",
  3: "Million ",
  4: "Billion ",
};
const limit = 999999999;
let result = "";
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  onSubmit();
});
function onSubmit(e) {
  const num = document.querySelector("#num").value;
  result = ""
  document.querySelector("#res").innerText ="Converted Number is : " +main(num);
}
function main(num) {
  let absNum = Math.abs(num);
  if (num > limit) {
    return (document.querySelector("#res").innerText =
      "Number must be less than or equal to 999,999,999 ");
  }
  if (num.toString().includes("-") && absNum != 0) {
    result += "negative ";
  }
  if (absNum in oneDigit) {
    result += oneDigit[absNum];
  } else if (absNum < 100) {
    result += twoDigitOrLessConvert(absNum);
  } else {
    var numArray = splitNum(absNum);
    let count = numArray.length;
    for (i = 0; i < numArray.length; i++) {
      if (numArray[i][0] !== "000") {
        if (numArray[i][0].length == 3) {
          result += threeDigitConvert(parseInt(numArray[i]));
          result += " " + highDigit[count];
        } else {
          result += twoDigitOrLessConvert(parseInt(numArray[i]));
          result += " " + highDigit[count] + " ";
        }
        count--;
      } else {
        count--;
      }
    }
  }
  return result;
}
function threeDigitConvert(num) {
  var currentNumText = "";
  if (num == 0) {
    return "";
  }
  if (num < 100) {
    currentNumText += twoDigitOrLessConvert(num);
    return currentNumText;
  }
  currentNumText += oneDigit[num.toString().charAt(0)];
  currentNumText += " hundred ";
  if (num.toString().substr(1) !== "00") {
    currentNumText += twoDigitOrLessConvert(parseInt(num.toString().substr(1)));
  }
  return currentNumText;
}
function twoDigitOrLessConvert(num) {
  var currentNumText = "";
  if (num < 10) {
    return oneDigit[num];
  }
  if (num in twoDigit) {
    currentNumText += twoDigit[num];
  } else {
    currentNumText += twoDigitLast[num.toString().charAt(0)];
    if (num.toString().charAt(1) !== "0") {
      currentNumText += "-" + oneDigit[num.toString().charAt(1)];
    }
  }
  return currentNumText;
}
function splitNum(num) {
  let numArray = [];
  var numString = num.toString();
  var count = 0;
  var tempArray = [];
  var singleDigits = numString.split("");
  var digits = singleDigits.length;
  for (var i = digits - 1; i >= 0; i--) {
    tempArray[0] = singleDigits[i] + tempArray[0];
    count++;
    tempArray[0] = tempArray[0].replace("undefined", "");
    if (count % 3 == 0) {
      numArray.unshift(tempArray);
      tempArray = [];
    }
  }
  if (tempArray.length != 0) {
    numArray.unshift(tempArray);
  }
  return numArray;
}
