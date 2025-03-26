export const searchSkin = async (search) => {
    const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/search?name=${search}`);
    const data = await response.json();
    return data.data;
}