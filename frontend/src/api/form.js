
const API_URL = import.meta.env.VITE_API_URL;

// create
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

//read
export async function readForm() {
    const response = await fetch(`${API_URL}/getuser`);

    return response.json();
    
}

//update
export async function updateForm(id,userdata) {
    const response = await fetch(`${API_URL}/updateuser/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(userdata)
    });

    return response.json();
    
}

//delete

export async function deleteForm(id) {
    const response = await fetch(`${API_URL}/deleteuser/${id}`,{
        method: "DELETE"
    })
    
    return response.json();
}

