
const API_URL = import.meta.env.VITE_API_URL;

export  async function createForm(formData) {

    const response = await fetch(`${API_URL}/createuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    return response.json();

}

export async function readForm(params) {
    const response = await fetch(`${API_URL}/getuser`);

    return response.json();
    
}

