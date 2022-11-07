
const nameBtn = document.getElementById("title")

function colorChange(){
  document.getElementById("title").style.color = "pink"
}
nameBtn.addEventListener("click", colorChange)

const filterBtn = document.getElementById("big-image")
function filter() {
  document.getElementById("applyFilter").style.filter = "grayscale(100%)"
}
filterBtn.addEventListener("click", filter)


