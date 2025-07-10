export async function getAllCards() {
    try {
        const response = await fetch('/api/words');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const words = await response.json();
        return words.map(word => ({ word })); // Convert strings to objects
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return []; // Return an empty array on error
    }
}