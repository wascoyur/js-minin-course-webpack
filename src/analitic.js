function createAnalitics() {
	let counter = 0;
	let isDestroyed = false;
	const listener = () => counter++;
	document.addEventListener('click', listener)
	return {
		destroy() {
			document.removeEventListener('click', listener);
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