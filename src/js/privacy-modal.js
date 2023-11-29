  function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.remove("is-hidden");
    document.body.classList.add('no-scroll');

  }

  function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.add("is-hidden");
    document.body.classList.remove('no-scroll');
  }
