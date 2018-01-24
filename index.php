<html>
	<head>
		<title>HTML5 WebApp: Tekenen</title>
		<link rel="stylesheet" href="core.css">
	</head>
	<body style="margin: 0">

		<div id="toolbar">
			<div id="radius">
				Radius <span id="radval">10</span>
				<div id="decrad" class="radiuscontrol">-</div>
				<div id="incrad" class="radiuscontrol">+</div>
			</div>
			<div id="kleuren"></div>
			<div id="reset">Reset</div>
		</div>
		<canvas id='canvas' style="display: block;">
			Je browser ondersteund blijkbaar geen HTML5 canvas, ik raad je aan Google Chrome te gebruiken!
		</canvas>
		<script src="tekenen.js"></script>
	</body>
</html>
