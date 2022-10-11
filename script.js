var bold = document.getElementById("bold")
var italic = document.getElementById("italic")
var underline = document.getElementById("underline")
var center = document.getElementById("center")
var left = document.getElementById("left")
var right = document.getElementById("right")
var textarea = document.getElementById("textarea")
var color = document.getElementById("color")

color.addEventListener("input" , () => {
    textarea.style.color = color.value
})

bold.addEventListener("click", () => {
    bold.classList.toggle("active")
    textarea.classList.toggle("bold")
})
italic.addEventListener("click", () => {
    italic.classList.toggle("active")
    textarea.classList.toggle("italic")
})
underline.addEventListener("click", () => {
    underline.classList.toggle("active")
    textarea.classList.toggle("underline")
})
center.addEventListener("click", () => {
    center.classList.toggle("active")
    textarea.classList.toggle("center")
})
left.addEventListener("click", () => {
    left.classList.toggle("active")
    textarea.classList.toggle("left")
})
right.addEventListener("click", () => {
    right.classList.toggle("active")
    textarea.classList.toggle("right")
})

textarea.addEventListener("mouseup", () => {
    console.log(textarea.select())
    console.log(textarea.selectionEnd)
})