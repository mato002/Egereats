// Function to create a food item
function createFoodItem(name, image, price, rating) {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');

    const img = document.createElement('img');
    img.src = image;
    img.alt = name;

    const foodDetails = document.createElement('div');
    foodDetails.classList.add('food-details');
    foodDetails.innerHTML = `
        <h2>${name}</h2>
        <div class="price">${price}</div>
        <div class="rating">Rating: ${rating}</div>
        <button class="add-to-cart">Add to Cart</button>
    `;

    foodItem.appendChild(img);
    foodItem.appendChild(foodDetails);

    return foodItem;
}

// Function to render food items
function renderFoodItems(foodItems) {
    const foodList = document.getElementById('foodList');
    foodItems.forEach(item => {
        const foodItem = createFoodItem(item.name, item.image, item.price, item.rating);
        foodList.appendChild(foodItem);
    });
}

// Call the function to render food items when the page loads
window.onload = function() {
    // Here you can fetch your data from a server or any other data source
    // and then pass it to the renderFoodItems function.
    // For example:
    // fetch('your-data-endpoint')
    //     .then(response => response.json())
    //     .then(data => renderFoodItems(data))
    //     .catch(error => console.error('Error fetching data:', error));
};
