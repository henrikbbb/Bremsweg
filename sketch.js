let a, t, v0
let img
let slider, sliderText
let distanceText
let button

function preload() {
	img = loadImage('auto.png')

}


function setup() {
	createCanvas(1200, 100)

	slider = createSlider(0, 200, 50, 10)

	sliderText = createP('Start-Geschwindigkeit: ' + structuredClone(slider.value()) + ' km/h')
	slider.input(() => {
		sliderText.html('Start-Geschwindigkeit: ' + structuredClone(slider.value()) + ' km/h')
	})

	distanceText = createP('Bremsweg: 0 m')

	button = createButton('start')
	button.mousePressed(() => {
		t = 0
		v0 = slider.value()
	})

	t = 0
	a = -9.9
	v0 = 0
}

function draw() {
	background(255)
	fill(255, 0, 0)

	let v = a*t + v0
	let s = 1/2 * a * t**2 + v0*t
	image(img, s - 90 + 100, 0, 90, 50)
	distanceText.html('Bremsweg: ' + structuredClone(int(s/10)) + ' m')

	if (v > 0) {
		t += 0.2
	} else {
		v = 0
	}

	textAlign(CENTER, TOP)
	fill(0)
	push()
	translate(100, 0)
	for (let x = 0; x <= 1000; x += 100) {
		line(x, 50, x, 75)
		text(x/10, x, 80)
	}
	pop()
}
