var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CleanBtn = document.getElementById('reset');

context.lineWidth = radius*2;

var putPoint = function(e){
	if(dragging == true){
    context.lineCap = 'square';
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(0, 0, radius, 0, 2*Math.PI/2^2*5);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

var CleanCanvas = function(){
	context.fillStyle = 'white';
	context.fillRect(0,0, window.innerWidth, window.innerWidth);
	setSwatch({target: document.getElementsByClassName("swatch")[0]});
}

CleanBtn.addEventListener('click', CleanCanvas);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseout', disengage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

var setRadius = function(newRadius){
	if(newRadius<minRad){
		newRadius = minRad;
	}else if(newRadius>maxRad){
		newRadius = maxRad;
	}
	radius = newRadius;
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;
}

var minRad = 0.5,
	maxRad = 100,
	interval = 5,
	defaultRad = 20,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');
decRad.addEventListener('click', function(){
	setRadius(radius-interval);
})

incRad.addEventListener('click', function(){
	setRadius(radius+interval);
})

setRadius(defaultRad);

var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(var i=0, n=colors.length; i<n; i++){
	var swatch = document.createElement('div');
	swatch.className = "swatch";
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('kleuren').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName("active")[0];
	if(active){
		active.className = "swatch";
	}
}

function setSwatch(e){
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += " active";
}

setSwatch({target: document.getElementsByClassName("swatch")[0]});
