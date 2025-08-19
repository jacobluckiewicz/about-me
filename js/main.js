
//  this is changing a border color of element 
const boxes = document.querySelectorAll('.wrap-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.7 }); // 70% must be viewed

  boxes.forEach(box => observer.observe(box));


  // gallery photo for quick facts 
  const images = [
  "https://github.com/jacobluckiewicz/portfolio/blob/a34664ab03ff7e7a0d60da5bc1d2fe462bde8b80/images/IMG_20250810_135300.jpg",
  "https://github.com/jacobluckiewicz/portfolio/blob/main/images/kjeragbolten.jpg",
  "https://github.com/jacobluckiewicz/portfolio/blob/main/images/sheep-landscape.jpg",
  "https://github.com/jacobluckiewicz/portfolio/blob/main/images/idk_how_to_name_it.jpg"
];

let index = 0;
const gallery = document.getElementById("shelf");

function changeBackground() {
  gallery.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground(); // show first image
setInterval(changeBackground, 4000); // change every 4s
