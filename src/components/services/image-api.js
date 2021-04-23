const apiKey = '19901626-05d28a6fd401ec47b5efa4d58';
async function fetchImage(imageName, page) {
    const response = await fetch(`https://pixabay.com/api/?q=${imageName}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`No images`));
}

export default fetchImage ;

