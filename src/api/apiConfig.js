const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f08d272a5b9323b8122f1f7abd488b67',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;