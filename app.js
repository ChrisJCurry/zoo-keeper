let animalArray = ["Armadillo", "Bear", "Capybara", "Duck", "Elephant", "Frog", "Gorilla", "HuntsmanSpider", "Iguana", "Jellyfish", "KillerWhale", "Lizard", "Manatee", "Narwhal", "Opossum", "Pig", "Quail", "RingOctopus", "Snake", "TazmanianDevil", "Urchin", "Vulture", "Wolf", "XRayFish", "YellowJacket", "Zebra"]
let allAnimals = []

//#region IMPORTS
//A
import Armadillo from "./Animals/Armadillo.js";
let Arnold = new Armadillo("Arnold", "M", "80", 9, 10);
allAnimals.push(Arnold)

//B
import Bear from "./Animals/Bear.js";
let Barney = new Bear(undefined, "M", "500", 9, false)
allAnimals.push(Barney)

//C
import Capybara from "./Animals/Capybara.js";
let Carl = new Capybara("Carl", "M", "80", 9, true)
allAnimals.push(Carl)

//D
import Duck from "./Animals/Duck.js";
let Donald = new Duck("Donald", "M", "200", true, true)
allAnimals.push(Donald)

//E
import Elephant from "./Animals/Elephant.js";
let Eli = new Elephant("Eli", "F", "3500", true)
allAnimals.push(Eli)

//F
import Frog from "./Animals/Frog.js";
let Filmore = new Frog("Filmore", "M", "0.5", true, 200)
allAnimals.push(Filmore)

//G
import Gorilla from "./Animals/Gorilla.js"
let George = new Gorilla("George", "M", "1800", false, 300)
allAnimals.push(George)

//H
import HuntsmanSpider from "./Animals/HuntsmanSpider.js";
let Harry = new HuntsmanSpider("Harry", "M", 0.1, false, 300)
allAnimals.push(Harry)

//I
import Iguana from "./Animals/Iguana.js";
let Iggy = new Iguana("Iggy", "F", true, true)
allAnimals.push(Iggy)

//J
import Jellyfish from "./Animals/Jellyfish.js";
let Jerry = new Jellyfish("Jerry", "M", 20, true)
allAnimals.push(Jerry)

//K
import KillerWhale from "./Animals/KillerWhale.js";
let Kyle = new KillerWhale("Kyle", "M", 35, false)
allAnimals.push(Kyle)

//L
import Lizard from "./Animals/Lizard.js";
let Lenny = new Lizard("Lenny", "M", true, false)
allAnimals.push(Lenny)

//M
import Manatee from "./Animals/Manatee.js";
let Marty = new Manatee("Marty", "M", true, false)
allAnimals.push(Marty)

//N
import Narwhal from "./Animals/Narwhal.js";
let Ned = new Narwhal("Ned", "M", 13, true, false)
allAnimals.push(Ned)

//O
import Opossum from "./Animals/Opossum.js";
let Oscar = new Opossum("Oscar", "M", true, true, false)
allAnimals.push(Oscar)

//P
import Pig from "./Animals/Pig.js";
let Peggy = new Pig("Peggy", "F", 300, true)
allAnimals.push(Peggy)

//Q
import Quail from "./Animals/Quail.js";
let Quinton = new Quail("Quinton", "M", 200, true)
allAnimals.push(Quinton)

//R
import RingOctopus from "./Animals/RingOctopus.js";
let Randall = new RingOctopus("Randall", "M", 75, true, true)
allAnimals.push(Randall)

//S
import Snake from "./Animals/Snake.js";
let Sally = new Snake("Sally", "black/green", "F", 5, 9, true, true, false)
allAnimals.push(Sally)

//T
import TazmanianDevil from "./Animals/TazmanianDevil.js";
let Taz = new TazmanianDevil("Taz", "M", 400, "BLEUBLEUBLBEUBEUGH")
allAnimals.push(Taz)

//U
import Urchin from "./Animals/Urchin.js";
let Ursela = new Urchin("Ursela", "F", 80)
allAnimals.push(Ursela)

//V
import Vulture from "./Animals/Vulture.js";
let Victor = new Vulture("Victor", "M", 900)
allAnimals.push(Victor)

//W
import Wolf from "./Animals/Wolf.js";
let Wanda = new Wolf("Wanda", "F", 200, true)
allAnimals.push(Wanda)

//X
import XRayFish from "./Animals/XRayFish.js";
let Xavier = new XRayFish("Xavier", "M", true, false)
allAnimals.push(Xavier)

//Y
import YellowJacket from "./Animals/YellowJacket.js";
let Yellowford = new YellowJacket("Yellowford", "M", "Angry", true, false)
allAnimals.push(Yellowford)

//Z
import Zebra from "./Animals/Zebra.js";
let Zolton = new Zebra("Zolton", "M", "Happy", "Grass", "Being Herded")
allAnimals.push(Zolton)
//#endregion IMPORTS
//console.log(allAnimals)
let maleAnimals = []
let femaleAnimals = []

allAnimals.forEach(function(animal) {
    if(animal.gender == "M") {
        maleAnimals.push(animal)
    } else if(animal.gender == "F") {
        femaleAnimals.push(animal)
    }
})

function setText() {
    let animalsText = document.getElementById("animals-text")
    let template = ""
    allAnimals.forEach(animal => {
        //console.log(animal)
        template += `${animal.name}, `
        console.log(template)
    })

    animalsText.innerHTML = template;
}

function setModifyText() {
    let maleAnimalsText = document.getElementById("male-text")
    let femaleAnimalsText = document.getElementById("female-text")
    let template = ""
    maleAnimals.forEach(animal => {
        //console.log(animal)
        template += `${animal.name}, `
        //console.log(template)
    })
    maleAnimalsText.innerHTML = 'Males: ' + template;
    template = ""
    femaleAnimals.forEach(animal => {
        template += `${animal.name}, `
    })
    femaleAnimalsText.innerHTML = 'Females: ' + template;
}

setText()
setModifyText()

console.log(maleAnimals)
console.log(femaleAnimals)


