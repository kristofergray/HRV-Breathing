const container = document.querySelector('.container');

const text = document.querySelector('#text');

const totalTime = 12000;
const inhaleTime = 7800;
const exhaleTime = 4200;

breatheAnimation();

function breatheAnimation() {
	text.innerText = 'In Through the Nose';
	container.className = 'container grow';

	setTimeout(() => {
		text.innerText = 'Out Through the Nose';
		container.className = 'container shrink';
	}, exhaleTime);
}

setInterval(breatheAnimation, totalTime);
