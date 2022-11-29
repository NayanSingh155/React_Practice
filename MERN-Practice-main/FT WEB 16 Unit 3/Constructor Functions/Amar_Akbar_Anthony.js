var p1={
    name:"Amar",
    skill:"Singer",
    city:"Goa"
}
var p2={
    name:"Akbar",
    skill:"Chef",
    city:"Mumbai"
}
var p3={
    name:"Anthony",
    skill:"Magician",
    city:"Kashmir"
}
function skillChurao(skill,city){
    this.new_Skill=skill
    this.new_City=city
}
skillChurao.call(p1,p3.skill,p3.city)
console.log(p1)
skillChurao.call(p2,p1.skill,p1.city)
console.log(p2)
skillChurao.call(p3,p2.skill,p2.city)
console.log(p3)
