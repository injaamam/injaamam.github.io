document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-message").textContent =
      "Thank you for reaching out! I will get back to you soon.";
    this.reset();
  });
