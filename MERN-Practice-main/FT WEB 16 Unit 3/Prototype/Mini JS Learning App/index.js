//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scope ={
    def : "Scope is a concept that refers to where values and functions can be accessed.",
   type1: "Global scope (a value/function in the global scope can be used anywhere in the entire program)",
   type2: "File or module scope (the value/function can only be accessed from within the file)",
   type3: "Function scope (only visible within the function)",
   type4: "Code block scope (only visible within a { ... } codeblock)"
}
console.log(scope);
var hoisting ={
    def:"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
    type1:  "Hoisting allows functions to be safely used in code before they are declared.",
    type2:"One of the advantages of hoisting is that it lets you use a function before you declare it in your code.",
    type3:"Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
    type4:"If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted"

}
console.log(hoisting)
var constructor ={
    def:"The constructor method is a special method of a class for creating and initializing an object instance of that class.",
    type1:"A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
    type2:"If you don't provide your own constructor, then a default constructor will be supplied for you.",
    type3:"If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided.",
    type4:"There can be only one special method with the name constructor in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error."
}
console.log(constructor)

var prototype ={
    def :"Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
    type1:"Every object in JavaScript has a built-in property, which is called its prototype",
    type2:"When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. ",
    type3:"There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: Object.create() and constructors.",
    type4:"Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects."
}
console.log(prototype)


localStorage.setItem("scope",JSON.stringify(scope))

document.querySelector("#scope").addEventListener("click",function(event){
    event.preventDefault()
    var a = document.createElement("ul");
    a.setAttribute("id","ul1")
    var b =document.createElement("li");
    b.innerText=scope.def;
    var c =document.createElement("li");
    c.innerText=scope.type1;
    var d =document.createElement("li");
    d.innerText=scope.type2;
    var e =document.createElement("li");
    e.innerText=scope.type3;
    var f  =document.createElement("li");
    f.innerText=scope.type4;
    a.append(b,c,d,e,f);
    document.querySelector("#a").append(a)
    var x = document.querySelector("#ul1");
    console.log(x)
    if(x.style.display == "none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
})
localStorage.setItem("hoisting",JSON.stringify(hoisting))

document.querySelector("#hoisting").addEventListener("click",function(event){
    event.preventDefault()
    var a = document.createElement("ul");
    a.setAttribute("id","ul2")
    var b =document.createElement("li");
    b.innerText=hoisting.def;
    var c =document.createElement("li");
    c.innerText=hoisting.type1;
    var d =document.createElement("li");
    d.innerText=hoisting.type2;
    var e =document.createElement("li");
    e.innerText=hoisting.type3;
    var f  =document.createElement("li");
    f.innerText=hoisting.type4;
    a.append(b,c,d,e,f);
    document.querySelector("#b").append(a)
    var x = document.querySelector("#ul2");
    console.log(x)
    if(x.style.display == "none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
})
localStorage.setItem("constructor",JSON.stringify(constructor))

document.querySelector("#constructor").addEventListener("click",function(event){
    event.preventDefault()
    var a = document.createElement("ul");
    a.setAttribute("id","ul3")
    var b =document.createElement("li");
    b.innerText=constructor.def;
    var c =document.createElement("li");
    c.innerText=constructor.type1;
    var d =document.createElement("li");
    d.innerText=constructor.type2;
    var e =document.createElement("li");
    e.innerText=constructor.type3;
    var f  =document.createElement("li");
    f.innerText=constructor.type4;
    a.append(b,c,d,e,f);
    document.querySelector("#c").append(a)
    var x = document.querySelector("#ul3");
    console.log(x)
    if(x.style.display == "none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
})
localStorage.setItem("prototype",JSON.stringify(prototype))

document.querySelector("#prototype").addEventListener("click",function(event){
    event.preventDefault()
    var a = document.createElement("ul");
    a.setAttribute("id","ul4")
    var b =document.createElement("li");
    b.innerText=prototype.def;
    var c =document.createElement("li");
    c.innerText=prototype.type1;
    var d =document.createElement("li");
    d.innerText=prototype.type2;
    var e =document.createElement("li");
    e.innerText=prototype.type3;
    var f  =document.createElement("li");
    f.innerText=prototype.type4;
    a.append(b,c,d,e,f);
    document.querySelector("#d").append(a)
    var x = document.querySelector("#ul4");
    console.log(x)
    if(x.style.display == "none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }

})