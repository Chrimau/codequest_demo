document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribe-button");
    subscribeButton.addEventListener("click", function () {
        const emailInput = document.querySelector("input[type='email']");
        if (emailInput.value) {
            alert(`Thank you for subscribing, ${emailInput.value}!`);
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
