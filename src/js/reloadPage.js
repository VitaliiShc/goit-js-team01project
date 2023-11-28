window.addEventListener('beforeunload', () => {
  if (window.innerWidth < 768) {
    window.scrollTo(0, 881);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    window.scrollTo(0, 1110);
  } else {
    window.scrollTo(0, 761);
  }
});
