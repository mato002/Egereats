// This block prompts the user to either log in or sign up.
// Note that this will be used with HTML forms.
// and also a backend server

// Simulated user database
const userDatabase = {};

 // Function to handle login form submission
 document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (userDatabase[username] === password) {
      alert("Login successful. Welcome, " + username + "!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
});

// Function to handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;

    if (username in userDatabase) {
      alert("Username already exists. Please choose a different one.");
    } else {
      const password = document.getElementById("signupPassword").value;
      userDatabase[username] = password;
      alert("Account created successfully. You can now log in.");
    }
  });

// Function to prompt user for login
function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    if (userDatabase[username] === password) {
        alert("Login successful. Welcome, " + username + "!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to prompt user for signup
function signup() {
    const username = prompt("Enter a new username:");

    if (username in userDatabase) {
        alert("Username already exists. Please choose a different one.");
    } else {
        const password = prompt("Enter a password:");
        userDatabase[username] = password;
        alert("Account created successfully. You can now log in.");
    }
}

// Main function to prompt user to login or signup
function main() {
    while (true) {
        const choice = prompt(
            "Welcome to the EGEREATS!\n1. Log in\n2. Sign up\n3. Exit"
        );

        switch (choice) {
            case "1":
                login();
                break;
            case "2":
                signup();
                break;
            case "3":
                alert("Exiting EGEREATS. Goodbye!");
                return;
            default:
                alert("Invalid choice. Please choose a valid option.");
        }
    }
}

//This program uses `prompt()` to interact with the user for input. It offers options to log in, sign up, or exit. 
//The login function checks if the entered username and password match the stored data. 
//The signup function prompts the user for a new username, checks if it's available, then prompts for a password and adds the new user to the database.

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
  