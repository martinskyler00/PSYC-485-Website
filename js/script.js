// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav');

menuToggle.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});
});

// Search Bar Validation
document.querySelector('.search-bar form').addEventListener('submit', function(event) {
  const location = document.querySelector('#location').value.trim();
  const checkIn = document.querySelector('#check-in').value;
  const checkOut = document.querySelector('#check-out').value;
  const guests = document.querySelector('#guests').value;

if (!location || !checkIn || !checkOut || !guests) {
  alert('Please fill in all fields before searching.');
  event.preventDefault(); // Prevent form submission if validation fails
}
});
