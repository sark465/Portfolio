// script.js

// Function to update the profile image source on the webpage
document.addEventListener('DOMContentLoaded', function () {
    // Update the profile picture if the element with ID 'profile-img' exists
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.src = 'images/profile.jpg';  // Path to your profile image
    }
    
    // Additional JS functionalities can go here (e.g., animations, event handlers)
});
