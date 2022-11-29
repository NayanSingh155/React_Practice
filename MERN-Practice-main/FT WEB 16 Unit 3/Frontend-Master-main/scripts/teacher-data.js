let arr = [
    {
        img:"https://static.frontendmasters.com/assets/teachers/moss/thumb@2x.webp",
        name:"Scott Moss",
        company:"Netflix"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/kinney/thumb@2x.webp",
        name:"Steve Kinney",
        company:"Temporal"
    },
    {
        img: "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb@2x.webp",
        name:"ThePrimeagen",
        company:"Netflix"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb@2x.webp",
        name:"Lukas Ruebbelke",
        company:"Venmo"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/firtman/thumb@2x.webp",
        name:"Maximiliano Firtman",
        company:"Independent Consultant"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/khourshid/thumb@2x.webp",
        name:"David Khourshid",
        company:"Microsoft"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        name:"Jen Kramer",
        company:"Freelance Instructor"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/deslauriers/thumb@2x.webp",
        name:"Matt DesLauriers",
        company:"Freelancer"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/boag/thumb@2x.webp",
        name:"Paul Boag",
        company:"BoagWorld"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/verou/thumb@2x.webp",
        name:"Lea Verou",
        company:"MIT"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/kraman/thumb@2x.webp",
        name:"Kadi Kraman",
        company:"Formidable"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        name:"Brian Holt",
        company:"Stripe"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/lengstorf/thumb@2x.webp",
        name:"Jason Lengstorf",
        company:"Netlify"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/zakharenko/thumb@2x.webp",
        name:"Nina Zakharenko",
        company:"Microsoft"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/hardaway/thumb@2x.webp",
        name:" Jerome Hardaway",
        company:"Vets Who Code"
    },
    {
        img:"https://static.frontendmasters.com/assets/teachers/sasidharan/thumb@2x.webp",
        name:"Divya S",
        company:"Netlify"
    }

]

localStorage.setItem("teacher-data",JSON.stringify(arr));
let data = JSON.parse(localStorage.getItem("teacher-data"));

data.map(function(el){
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let com = document.createElement("h5");
    img.src=el.img;
    name.innerText=el.name;
    com.innerText=el.company;
    let div = document.createElement("div")
    div.setAttribute("id","box")
    div.append(name,com,img);
    document.getElementById("container").append(div)
})