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

export const getOneSeason = async (seasonId) => {
    try {
        const response = await fetch(`${API_URL}/seasons/${seasonId}`, {
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

export const updateBestSkin = async (seasonId, bestSkin) => {
    try {
        const response = await fetch(`${API_URL}/seasons/${seasonId}/best-skin`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bestSkin)
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}