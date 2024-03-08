//This program offers options to log in, sign up, or forgotten password. 
//The login function checks if the entered username and password match the stored data. 
//The signup function prompts the user for a new username, checks if it's available, then prompts for a password and adds the new user to the database.

document.addEventListener('DOMContentLoaded', function() {
  const userButton = document.getElementById('userButton');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginUsernameInput = document.getElementById('loginUsername');
  const loginPasswordInput = document.getElementById('loginPassword');
  const signupUsernameInput = document.getElementById('signupUsername');
  const signupPasswordInput = document.getElementById('signupPassword');
  const forgotPasswordModal = document.getElementById('forgotPasswordModal');
  const forgotPasswordLink = document.getElementById('forgotPasswordLink');
  const emailInput = document.getElementById('email');

  let displayState = 0; // 0 for no form, 1 for login form, 2 for signup form

  userButton.addEventListener('click', function() {
      if (displayState === 0) {
          // No form is displayed, show the login form
          loginForm.style.display = 'block';
          signupForm.style.display = 'none';
          displayState = 1;
      } else if (displayState === 1) {
          // Login form is displayed, show the signup form
          loginForm.style.display = 'none';
          signupForm.style.display = 'block';
          displayState = 2;
      } else {
          // Signup form is displayed, hide both forms
          loginForm.style.display = 'none';
          signupForm.style.display = 'none';
          displayState = 0;
      }
  });

  // Function to check if the username already exists
  function checkUsernameExists(username) {
      // Replace this with your actual check for existing usernames
      // For example, you might make an AJAX request to the server
      const existingUsernames = ['user1', 'user2', 'user3']; // Dummy data
      return existingUsernames.includes(username);
  }

  // Function to handle form submission
  signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const username = signupUsernameInput.value;
      const password = signupPasswordInput.value;

      if (checkUsernameExists(username)) {
          alert('Account already exists!');
      } else {
          alert('Account created successfully!');
          // Here you can add code to submit the form data to the server
      }
  });

  // Function to handle forgotten password link click
  forgotPasswordLink.addEventListener('click', function() {
      forgotPasswordModal.style.display = 'block';
  });

  // Function to handle forgotten password form submission
  forgotPasswordModal.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const email = emailInput.value;

      // Simulated reset password functionality (you may implement actual logic here)
      alert('Password reset instructions sent to ' + email);

      // Close the modal
      forgotPasswordModal.style.display = 'none';
  });
});


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
        // Simulate subscription success (replace this with your actual subscription logic)
        setTimeout(function() {
          alert('Successfully subscribed!');
          emailInput.value = ''; // Clear the email input
          emailInput.style.display = 'none'; // Hide the email input
          subscribeForm.querySelector('button[type="submit"]').disabled = true; // Disable the submit button
        }, 1000);
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


// function to toggle visibility of payments
function togglePaypalVisibility(){
    var content=document.getElementById('setUpPaypal');
    if(content.style.display==="none"){
        content.style.display="block";
    }
    else{
            content.style.display="none";
        }
    }

    function toggleCardVisibility(){
        var content=document.getElementById('setUpCard');
        if(content.style.display==="none"){
            content.style.display="block";
        }
        else{
                content.style.display="none";
            }
        }


    //   redirect to homepage

        function redirectToHomepage() {
            // Redirect to the homepage URL
            window.location.href = "http://127.0.0.1:5500/index.html"; 
          }


  // -------search bar  
  


