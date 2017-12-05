function loadProject() {
	$('#generate').append('<div id="player" style="width:500px;height:410px;overflow:hidden;position:relative;"><object style="position:absolute;top:-51px;left:-2060px" class="int-player" width="2560" height="1440" data="https://llk.github.io/scratch-gui/#' + document.getElementById('projectID').value + '" scrolling="no"></object></div>');
	document.getElementById('embedCode').innerHTML = 'https://jgames101.github.io/scratch-silicon/project/?id=' + document.getElementById('projectID').value;
	document.getElementById('urlLink').innerHTML = 'https://jgames101.github.io/scratch-silicon/project/?id=' + document.getElementById('projectID').value;
	document.getElementById('urlLink').href = 'https://jgames101.github.io/scratch-silicon/project/?id=' + document.getElementById('projectID').value;
	document.getElementById('embedCodeBox').style.display = 'block';
}