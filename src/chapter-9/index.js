const formatBolds = () => {
	const bolds = document.getElementsByTagName('strong');
	Object.entries(bolds).forEach(element => {
		element[1].style.color = 'blue';
		element[1].style.textDecoration = "underline";
	})
}

const removeFormat = () => {
	const bolds = document.getElementsByTagName('strong');
	Object.entries(bolds).forEach(element => {
		element[1].style.color = 'black';
		element[1].style.textDecoration = "none";
	})
}