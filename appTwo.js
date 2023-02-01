const modalOneBtn = document.getElementsByClassName('btnOne')[0]
const modalOne = document.getElementsByClassName('modalOne')[0]

function openOne() {
    console.log(modalOne)
  modalOne.style.display = 'block'
}
modalOneBtn.addEventListener('click', openOne)


// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
  }
  
  span[1].onclick = function() {
  modal[1].style.display = "none";
  }
      
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
  }