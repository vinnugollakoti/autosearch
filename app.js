// Sample data in JSON format
const data = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Cherry" },
    { name: "Date" },
    { name: "Fig" },
    { name: "Grapes" },
    { name: "Kiwi" },
    { name: "Lemon" },
    { name: "Mango" },
    { name: "Orange" }
];

// Get references to HTML elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const suggestionsList = document.getElementById('suggestions');

// Function to filter suggestions based on input
function getSuggestions(query) {
    return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to display suggestions
function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion.name;
        suggestionsList.appendChild(li);
    });
}

// Event listener for input field to show suggestions
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query) {
        const suggestions = getSuggestions(query);
        displaySuggestions(suggestions);
    } else {
        suggestionsList.innerHTML = '';
    }
});

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        const suggestions = getSuggestions(query);
        displaySuggestions(suggestions);
    }
});
