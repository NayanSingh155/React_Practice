 let arr = [1,2,3]
 function myFun() {
    Object.defineProperty(this, "length", {
      value: 0,
      writable: true, 
      enumerable: false
    });

    for (let i = 0; i < arguments.length; i++) {
     

      this[i] = arguments[i];
    }

    this.length = arguments.length;
  }
 // console.log(arr)

  myFun.prototype.push = function (value) {
    let index = this.length;

    this[index] = value;

    this.length++;
  };
  myFun.prototype.reverse = function (){
      let bag ="";
      for(let i =this.length; i >=0;i--){
            bag = bag + arguments[i]
      }
      return bag;
  }


arr.push(4);
arr.reverse()
console.log(arr)
console.log(arr[0])
  
  

