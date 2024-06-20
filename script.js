document.getElementById('matricForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Process form data (you may want to send this to a server using AJAX)

  // Show a thank you message (popup)
  alert('Thank you! Matric card generated successfully.');

  // Optionally, reset the form
  this.reset();
});
