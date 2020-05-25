import * as $ from 'jquery';
function createAnalitics() {
	let counter = 0;
	let isDestroyed = false;
	const listener = () => counter++;
	$(document).on('click', listener)
	return {
		destroy() {
			document.off('click', listener);
			isDestroyed = true;
		},
		getCLicks() {
			if (isDestroyed) {
				return 'Analitic is destroyed'
			}
			return counter;
		}
	}
}
window.analitics = createAnalitics();