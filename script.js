const container = document.querySelector('.container');

const text = document.querySelector('#text');

const totalTime = 12000;
const inhaleTime = 7800;
const exhaleTime = 4200;

breatheAnimation();

function breatheAnimation() {
	text.innerText = 'Breathe In';
	container.className = 'container grow';

	setTimeout(() => {
		text.innerText = 'Breathe Out';
		container.className = 'container shrink';
	}, exhaleTime);
}

setInterval(breatheAnimation, totalTime);
