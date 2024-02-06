const hamButton = document.querySelector('#buttoon');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});