const drawImage = () => {
	const myCanvas = document.getElementById("myCanvas");
	if (myCanvas.getContext) {
		const context = myCanvas.getContext("2d");
		context.beginPath();
    	context.arc(100, 100, 80, 0, Math.PI * 2);
    	context.moveTo(160, 100);
		context.arc(100, 100, 60, 0, Math.PI); 
		context.moveTo(55, 70);
		context.arc(65, 70, 10, 0, Math.PI * 2); 
		context.moveTo(75, 70);
		context.arc(135, 70, 10, 0, Math.PI * 2);
    	context.stroke();
	}
}

drawImage();