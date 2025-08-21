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
	}
	// { threshold: 0.7 }
) // 70% must be viewed

boxes.forEach(box => observer.observe(box))

// gallery photo for quick facts
const images = ['images/idk_how_to_name_it.jpg', 'images/sheep-landscape.jpg', 'images/kjeragbolten.jpg']
let index = 0
const gallery = document.getElementById('shelf')

function changeBackground() {
	if (!gallery) return // ← guard
	gallery.style.backgroundImage = `url(${images[index]})`
	index = (index + 1) % images.length
}

changeBackground()
if (gallery) setInterval(changeBackground, 3000)

// timeline scroll activation
const items = document.querySelectorAll('.timeline-item')

const observer2 = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active')
			}
		})
	},
	{ threshold: 0.4 }
)

items.forEach(item => observer2.observe(item))

// copy email
function copyEmail() {
	navigator.clipboard.writeText('jakub.luckiewicz1@gmail.com')
}

function copyNumber() {
	navigator.clipboard.writeText('+48 501 407 979')
}

// navigaation scroll
document.querySelectorAll('.nav__items-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		const sel = btn.getAttribute('data-target')
		const el = document.querySelector(sel)
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	})
})

document.querySelector('.header__scroll-down-btn')?.addEventListener('click', () => {
	document.querySelector('#about-me')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
