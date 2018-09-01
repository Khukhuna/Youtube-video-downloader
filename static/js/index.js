alert('hello world');

const button = document.getElementById('videoSubmit');
const input = document.getElementById('videoInput');

button.addEventListener('click', function(){
	alert(input.value);
});