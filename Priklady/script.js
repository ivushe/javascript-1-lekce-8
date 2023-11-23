// const odstavec = document.querySelector("#odstavec")
// const body = document.querySelector("body")

// // odstavec.style.backgroundColor = "blue"
// // odstavec.style.fontsize = "100px"
// // odstavec.classList.add("cervena")

// const priKliknuti = () => {
//     odstavec.classList.add("cervena")
//     odstavec.classList.toggle("zlate-pozadi")
// }

// odstavec.addEventListener("click", priKliknuti)

// odstavec.addEventListener("mouseover",()=>{
//     odstavec.classList.add("vetsi-pismo")
// }
// )
// body.addEventListener("keydown", (e)=> { //e je parametr, kam si uklada ten event listener hodnoty, muzu si ho pojemnovat jak chci
//     console.log(e.key)

//     if (e.key === "ArrowDown"){
//         odstavec.classList.toggle("zlate-pozadi")
//     }
// }) //stisk klavesnice


const priKliknuti = (e) => {
    e.target.classList.toggle("ohraniceni")
}

const odstavec = document.querySelector("#odstavec1")
const odstavec2 = document.querySelector("#odstavec2")
const odstavec3 = document.querySelector("#odstavec3")

odstavec.addEventListener("click",priKliknuti)
odstavec2.addEventListener("click",priKliknuti)
odstavec3.addEventListener("click",priKliknuti)