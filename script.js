const main = document.getElementsByClassName("main")[0]
const start = document.createElement("div")
start.id = "start"
const offSet = document.createElement("div")
offSet.id = "offset"
const end = document.createElement("div")
end.id = "end"
const disk1 = document.createElement("div")
disk1.id = "d1"
const disk2 = document.createElement("div")
disk2.id = "d2"
const disk3 = document.createElement("div")
disk3.id = "d3"
const disk4 = document.createElement("div")
disk4.id = "d4"

//criado uma torre para cada div
const tower1 = document.createElement("div")
tower1.id = "tower"
const tower2 = document.createElement("div")
tower2.id = "tower"
const tower3 = document.createElement("div")
tower3.id = "tower"

start.classList.add("towers")
offSet.classList.add("towers")
end.classList.add("towers")

// primeira torre
start.appendChild(tower1)
start.appendChild(disk1)
start.appendChild(disk2)
start.appendChild(disk3)
start.appendChild(disk4)


// segunda torre
offSet.appendChild(tower2)

// terceira torre
end.appendChild(tower3)

//div main
main.appendChild(start)
main.appendChild(offSet)
main.appendChild(end)


const d1 = document.getElementById("d1")
d1.addEventListener("click", printId)
const d2 = document.getElementById("d2")
d2.addEventListener("click", printId)
const d3 = document.getElementById("d3")
d3.addEventListener("click", printId)
const d4 = document.getElementById("d4")
d4.addEventListener("click", printId)

function printId (evt) {
    return (evt.currentTarget.id)
}


let currentDisk = ''
let startDisk;
const towerStart = (evt) => {
           
   
    
    if (startDisk === 'tower') {
        startDisk = evt.currentTarget.childNodes[0].id;
    }

    if (currentDisk === '') {
        startDisk = evt.currentTarget.childNodes[1].id; 
        currentDisk = startDisk;        
    } 
    else {
        if (currentDisk === 'tower') {
            currentDisk = '';
        }
        let disk = document.getElementById(`${currentDisk}`)
        console.log(currentDisk)
        start.insertBefore(disk, start.childNodes[1])
        currentDisk = '';
    }   
    
}

const towerOffset = (evt) => {
    offsetDisk = offSet.firstElementChild.id;
    if (currentDisk === '') {
        currentDisk = offsetDisk;
        console.log(currentDisk)
    }
    else {
        if (currentDisk === 'tower') {
            currentDisk = '';
        }
        let disk = document.getElementById(`${currentDisk}`)
        offSet.insertBefore(disk, offSet.childNodes[0])
        currentDisk = '';
    }    
}

const towerEnd = (evt) => {
    endDisk = end.firstElementChild.id;
    if (currentDisk === '') {
        currentDisk = endDisk;
    }
    else {
        if (currentDisk === 'tower') {
            currentDisk = '';
        }
        let disk = document.getElementById(`${currentDisk}`)
        end.insertBefore(disk, end.childNodes[0])
        currentDisk = '';
    }
    
}

//const d1 = document.getElementById("d1")
start.addEventListener("click", towerStart)

offSet.addEventListener("click", towerOffset)

end.addEventListener("click", towerEnd)

