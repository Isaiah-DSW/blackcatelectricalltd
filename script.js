var navOpen = 0;

function nav() {
	if (navOpen == 0) {
		navOpen = 1;
		document.getElementById('hamburgerdisplay').style.transform = 'rotate(180deg)';
		document.getElementById('hamburgerdisplay').style.backgroundImage = 'url("./style/images/hamburgerclose.svg")';
		document.getElementById('navbardropdown').style.height = '120vh';
		document.documentElement.style.overflowY = 'hidden';
	} else {
		navOpen = 0;
		document.getElementById('hamburgerdisplay').style.transform = 'rotate(0deg)';
		document.getElementById('hamburgerdisplay').style.backgroundImage = 'url("./style/images/hamburger.svg")';
		document.getElementById('navbardropdown').style.height = '0px';
		document.documentElement.style.overflowY = 'scroll';
	}
}