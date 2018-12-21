module.exports = {
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/sp/hello-nextjs': { page: '/staticpost', query: { title: 'hello-nextjs'}},
			'/sp/learn-nextjs': { page: '/staticpost', query: { title: 'learn-nextjs'}},
			'/p/481': { page: '/post', query: { id: '481' } },
			'/p/975': { page: '/post', query: { id: '975' } }
		}
	}
}

