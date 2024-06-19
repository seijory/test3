// Faq
document.querySelectorAll('.expand-btn').forEach(button => {
	button.addEventListener('click', function() {
			const container = this.closest('.faq-container');
			const svgPath = this.querySelector('path');
			
			container.classList.toggle('expanded');
			
			if (container.classList.contains('expanded')) {
					svgPath.setAttribute('fill', 'url(#gradient)');
			} else {
					svgPath.setAttribute('fill', '#FFFFFF');
			}
	});
});
// Send
const sendButton = document.querySelector('.send');
sendButton.addEventListener('click', function() {
	alert('Сообщение отправлено');
});