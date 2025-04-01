const API_URL = import.meta.env.VITE_API_URL

export const createSkin = async (skin) => {
    try {
        const response = await fetch(`${API_URL}/skins`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skin)
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}

export const createSkinSeason = async (skin) => {
    try {
        const response = await fetch(`${API_URL}/skinseasons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skin)
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}

export const getSkins = async () => {
    try {
        const response = await fetch(`${API_URL}/skins`);
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}

export const getSkinbyName = async (name) => {
    try {
        const response = await fetch(`${API_URL}/skins/${name}`);
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }
}

export const updateWins = async (updateData) => {
    try {
        const response = await fetch(`${API_URL}/skinseasons/update-wins`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }    
}
