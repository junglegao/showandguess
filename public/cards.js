export async function getAllCards() {
    try {
        const response = await fetch('/api/words');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // The API now returns full card objects, so just return them directly.
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return []; // Return an empty array on error
    }
}