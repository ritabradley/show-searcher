const searchForm = document.querySelector('#search-form');
const queryInput = document.querySelector('#query-input');

const makeImages = async (shows) => {
	const results = document.querySelector('#results-container')
	for (let res of shows) {
		const img = document.createElement('img')
		img.src = res.show.image.medium
		results.appendChild(img)
	}
}

const showSearch = async () => {
	const searchTerm = queryInput.value.trim();
	const config = {params: {q: searchTerm}}
	const res = await axios.get('https://api.tvmaze.com/search/shows', config);

	queryInput.value = ''
	await makeImages(res.data)
}

searchForm.addEventListener('submit', e => {
	e.preventDefault();
	showSearch()
})