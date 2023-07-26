const likes = document.querySelector('.likes');
const image = document.querySelector('.image');
const imageContainer = document.querySelector('.image-container');
const heart = document.querySelector('.heart');
let count = 0;

image.addEventListener('dblclick', (event) => {
	count++;
	likes.textContent = count;
	const x = event.offsetX;
	const y = event.offsetY;
	const span = document.createElement('span');
	span.innerHTML = `<i class="fa fa-heart"></i>`;
	span.classList.add('heart-animation');
	span.style.left = x + 'px';
	span.style.top = y + 'px';
	imageContainer.appendChild(span);
	setTimeout(() => {
		span.remove();
	}, 1000);
});
