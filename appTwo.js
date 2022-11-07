const modalOneBtn = document.getElementsByClassName('btnOne')[0]
const modalOne = document.getElementsByClassName('modalOne')[0]

function openOne() {
    console.log(modalOne)
  modalOne.style.display = 'block'
}
modalOneBtn.addEventListener('click', openOne)