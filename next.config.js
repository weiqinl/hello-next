module.exports = {
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/p/481': { page: '/post', query: { id: '481' } }
		}
	}
}

