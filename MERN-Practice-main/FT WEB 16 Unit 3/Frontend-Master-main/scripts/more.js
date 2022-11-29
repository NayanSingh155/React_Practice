let arr=JSON.parse(localStorage.getItem("login_data")) || []
          
//    document.querySelector("#terms").addEventListener("click",submitfun)
  function submitfun(event){ 
    let Email= document.querySelector("#email").value
   let firstname= document.querySelector("#first_name").value
   let lastname= document.querySelector("#last_name").value
   let password= document.querySelector("#password").value
   let passagain= document.querySelector("#password_again").value
      event.preventDefault(event)
      // console.log("hello",Email) 
      
      
      if(password==passagain && password.length>=8 && Email !== "" && firstname !== "" && lastname!==""){
          // console.log(password,passagain)
          obj={
              Email:Email,
              firstname:firstname,
              lastname:lastname,
              password:password,
              passagain:passagain

          }
              arr.push(obj)
              localStorage.setItem("login_data",JSON.stringify(arr))
              window.location.href="./bootcamp.html"

      }
      else{
          alert("Fill Correct Details")
          
          
      }
      
      // console.log(arr)
     
  }
