document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the name input value
    const name = document.getElementById("name").value;

    // Display alert to confirm message receipt
    alert(`Thank you, ${name}! We have received your message and will be in touch soon.`);
    
    // Clear the form fields
    this.reset();
});
