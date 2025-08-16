const boxes = document.querySelectorAll('.wrap-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.7 }); // 70% elementu musi być widoczne

  boxes.forEach(box => observer.observe(box));