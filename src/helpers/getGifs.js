export const getGifs = async (category) => {
    // encodeURI permite que no haya espacios en el link que queremos mandar
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=vM6mWe9kkRbJ3MdB2LGZ9ouv5FCkgDxD`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}