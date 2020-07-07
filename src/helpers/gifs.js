export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kbWRqpxqRpPELCiCKkrDAzj3zj7wKxCV`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url
    }));
    return gifs;
}