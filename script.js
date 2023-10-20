// Unsplash API
const count = 10;
const apiKey = 'ZoUUqUcQEm_bDRINapvPqlO0LggvA5Rpq6t60DeEgMU';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();
