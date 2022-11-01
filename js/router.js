const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	const hash = event.target.hash.split('#')[1]
	window.history.pushState({}, "", hash ? window.location.origin + '/#' + hash : event.target.href);
	handleLocation();
}

const routes = {
	"/": "main.html",
	"/cases": "cases.html",
	"/cases/1": "1.html",
	"/cases/2": "2.html",
	"/cases/3": "3.html",
	"/cases/4": "4.html",
	"/cases/5": "5.html",
	"/cases/6": "6.html",
	"/cases/7": "7.html",
	"/cases/8": "8.html"
}
const handleLocation = async () => {
	let path = window.location.pathname;
	const route = routes[path]
	if (route !== undefined) {
		const html = await fetch(route).then(data => data.text());
		document.getElementById('root').innerHTML = html;
		const element = document.querySelector(window.location.hash)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'start'
			})
		}
	}
}
window.onpopstate = handleLocation;
window.route = route;

