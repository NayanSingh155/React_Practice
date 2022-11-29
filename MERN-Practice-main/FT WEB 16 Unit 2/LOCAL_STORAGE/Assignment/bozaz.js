document.querySelector("#form").addEventListener("submit",collectdata);  
var data = JSON.parse(localStorage.getItem("bozazData")) || [];
var num=1;
function collectdata(event){
    event.preventDefault()
    var bozaz={
        
        category: document.querySelector("select").value,
        title:document.querySelector("#t1").value,
        discription:document.querySelector("#dis1").value,
        price:document.querySelector("#p1").value
      
    };
    
    data.push(bozaz);
   // console.log(data);
   localStorage.setItem("bozazData",JSON.stringify(data));
   
   document.querySelector("tbody").innerText="";
   var data1 = JSON.parse(localStorage.getItem("bozazData"));
   console.log(data1);
  data1.map(function(elem,index){

    var row= document.createElement("tr");
    var col=document.createElement("td");
   col.innerText=num++;
    var col1=document.createElement("td");
    col1.innerText=elem.category;
    var col2=document.createElement("td");
    col2.innerText=elem.title;
    var col3=document.createElement("td");
    col3.innerText=elem.discription;
    var col4= document.createElement("td");
    col4.innerText=elem.price;
    row.append(col,col1,col2,col3,col4);
    document.querySelector("tbody").append(row);
  });
  
    
  


}

