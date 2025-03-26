const API_URL = import.meta.env.VITE_API_URL;

export const getSeasons = async () => {
    try {
        const response = await fetch(`${API_URL}/seasons`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}

export const createSeason = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/seasons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}