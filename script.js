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

const towers = document.createElement("div")
towers.id = "tower"
start.classList.add("towers")
offSet.classList.add("towers")
end.classList.add("towers")
// primeira torre
start.appendChild(towers)
start.appendChild(disk1)
start.appendChild(disk2)
start.appendChild(disk3)
start.appendChild(disk4)
// segunda torre
offSet.appendChild(towers)

// terceira torre
end.appendChild(towers)

//div main
main.appendChild(start)
main.appendChild(offSet)
main.appendChild(end)