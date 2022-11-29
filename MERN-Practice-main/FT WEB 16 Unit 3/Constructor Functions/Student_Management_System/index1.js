var studentdata =JSON.parse(localStorage.getItem("studentData")); 
console.log(studentdata)
studentdata.map(function(elem,index){
    
    var row=document.createElement("tr");
      var col = document.createElement("td");
      col.innerText=elem.name;
      var col1 = document.createElement("td");
      col1.innerText=elem.phone;
      var col2 = document.createElement("td");
      col2.innerText=elem.city;
      row.append(col,col1,col2);
      document.querySelector("tbody").append(row)
    })