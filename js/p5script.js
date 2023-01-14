function setup() {
	const canvas = createCanvas(
		document.getElementById("p5canvasContainer").offsetWidth,
		document.getElementById("p5canvasContainer").offsetWidth * 0.4
	);
	canvas.parent("p5canvasContainer");
}