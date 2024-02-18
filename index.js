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



/*
// Payment Methods

// Function to handle M-Pesa payment
function payWithMpesa() {
    // Implement M-Pesa payment logic here
    // This could involve making API requests to initiate the payment process
    // Upon successful payment, display a success message
    displayPaymentStatus("M-Pesa payment successful!");
}

// Function to handle PayPal payment
function payWithPayPal() {
    // Implement PayPal payment logic here
    // This could involve redirecting users to PayPal's payment page
    // Upon successful payment confirmation, display a success message
    displayPaymentStatus("PayPal payment successful!");
}

// Function to display payment status
function displayPaymentStatus(message) {
    const modal = document.getElementById("paymentModal");
    const statusElement = document.getElementById("paymentStatus");
    statusElement.innerText = message;
    modal.style.display = "block";
}

// Close the payment modal
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("paymentModal").style.display = "none";
});

// Event listeners for payment buttons
document.getElementById("mpesaBtn").addEventListener("click", payWithMpesa);
document.getElementById("paypalBtn").addEventListener("click", payWithPayPal);
*/

// Newsletter section
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');
  
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const email = emailInput.value;
  
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailPattern.test(email)) {
        alert('Successfully subscribed!');
      } else {
        alert('Email format is invalid!');
      }
    });
  });
  

// social media section 
document.addEventListener('DOMContentLoaded', function() {
    const socialMediaLinks = document.querySelectorAll('.social-media a');
  
    socialMediaLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.href;
        window.open(url, '_blank');
      });
    });
  });
  