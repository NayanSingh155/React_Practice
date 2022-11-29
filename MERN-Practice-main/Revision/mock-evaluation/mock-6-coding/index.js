let box1 = document.getElementById("box1");
function getRandomCharsFromString(str, length) {
  return Array.from({ length }, () => {
    return str[Math.floor(Math.random() * str.length)];
  });
}
function shuffle(str) {
  var a = str,
    n = a.length;
for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.join("");
}
function randScore(str) {
    var a = str,
      n = a.length;
  
    for (var i = 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return Math.random(a) * a;
  }
  
let consonant = [];
let vowel = [];
function getRandomString() {
  const vowels = "AEIOU";
  const consonants = "BCDFGJKLMNPQSTVXZ";
  const randomVowels = vowels;
  const randomConsonants = getRandomCharsFromString(consonants, 15);
  const randomCon = [...randomConsonants];
  const randomVowel = [...randomVowels];
  consonant.push(randomCon);
  vowel.push(randomVowel);
}
getRandomString();
// console.log(vowel,consonant)
vowel = vowel[0];
consonant = consonant[0];
let  limit=Math.floor(Math.random() * (5 - 1)) + 2;
let vs=[]
let cs=[]
for(let i=0;i<limit;i++){
    for(let j=0;j<consonant.length;j++){
        cs.push(consonant[j])
    }
}
console.log(vs)
// console.log(limit)
// console.log(consonant)
for(let i=0;i<limit;i++){
    for(let j=0;j<vowel.length;j++){
        vs.push(vowel[j])
    }
}
vowel.map((e) => {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  h4.innerText = e;
  let p = document.createElement("p");
  p.innerText = 1;
  div.append(h4,p)
  box1.append(div);
});
document.getElementById("tile").innerText=cs.length+vs.length
let x = randScore(["DL", "DW", "TL"]);
consonant.map((e,i) => {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  h4.innerText = e;
  let p = document.createElement("p");
  p.innerText = `${ e == "L" | (e == "N") | (e == "S") | (e == "T") | (e == "R") ? 1: (e == "D") | (e == "G") ? 2 : e == "K" ? 5 : (e == "J") | (e == "X")  ? 8  : (e == "Q") | (e == "Z")  ? 10  : (e == "F") | (e == "H") | (e == "V") | (e == "W") | (e == "Y")  ? 4  : 3}`;
  div.append(h4, p);
  box1.append(div);
});
function timer(){
    let time=99
   id= setInterval(()=>{
       document.getElementById("time").innerText=time--
        if(time==0) return clearInterval(id)
        },1000)
    
}
timer()