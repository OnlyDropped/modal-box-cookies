let modalBox = document.getElementById('modalbox');
function showModal() {
  setTimeout(() => {
    modalBox.style.display = 'block';
  }, 1500);
}

function closeModal() {
  modalBox.style.display = '';
}