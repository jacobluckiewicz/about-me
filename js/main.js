//  this is changing a border color of element
const boxes = document.querySelectorAll('.wrap-container')

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
			} else {
				entry.target.classList.remove('visible')
			}
		})
	},
	// { threshold: 0.7 }
) // 70% must be viewed

boxes.forEach(box => observer.observe(box))

// gallery photo for quick facts
const images = ['images/idk_how_to_name_it.jpg', 'images/sheep-landscape.jpg', 'images/kjeragbolten.jpg']

let index = 0
const gallery = document.getElementById('shelf')

function changeBackground() {
	gallery.style.backgroundImage = `url(${images[index]})`
	index = (index + 1) % images.length
}

changeBackground() // show first image
setInterval(changeBackground, 3000) // change every 2s
