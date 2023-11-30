function openModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  function closeModalHandler(e) {
    if (e.target === modal) {
      closeModal(modalId);
    }
  }

  modal.addEventListener('click', closeModalHandler);

  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  modal.removeEventListener('click', closeModalHandler);
  window.removeEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal(modalId);
    }
  });
}
