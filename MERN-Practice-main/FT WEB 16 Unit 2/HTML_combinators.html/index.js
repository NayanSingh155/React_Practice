function runProgram(input) {
  // Write code here
  //    console.log(input)
  input = input.trim().split("\n");
  let tc = +input[0];
  let l = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[l++];
    let arr = input[l++].trim().split(" ").map(Number);
    main(n, arr);
  }
}
function main(n, arr) {
  
 let x = miss(n,arr);
 let y=dup(n,arr)
 console.log(x,y);
 
}
function dup(n, arr) {
  for (i = 0; i < n; i++) {
    var temp = Math.abs(arr[i]);

    if (arr[temp - 1] == arr[temp]) {
      return temp
    } 
  }
 
}
function miss(n,arr){
    let sum=0;
    for (i = 0; i < n; i++){
         sum=sum+arr[i]
    }
    sum=sum-dup(n,arr)
    let total=Math.floor(n*(n+1)/2);
    return total-sum
}
if (process.env.USERNAME === "princ") {
  runProgram(`2
    5
    1 2 3 3 4
    2
    1 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
