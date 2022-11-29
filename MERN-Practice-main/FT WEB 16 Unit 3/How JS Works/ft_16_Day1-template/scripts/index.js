
document.getElementById("throw_dice").addEventListener("click",function(){

        var min = 1;
        var max = 6;
        var roll = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(roll);

   localStorage.setItem("number",roll)
   window.location.href="display.html"
    })


