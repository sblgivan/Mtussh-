// Function to navigate to Cart Screen
function goToCart() {
    alert("Navigating to Cart..."); // This will be replaced with actual navigation logic
}

// Flash Sale Timer Logic
function startFlashSaleTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var flashSaleDuration = 60 * 30, // 30 minutes
        display = document.querySelector('#flash-sale-timer');
    startFlashSaleTimer(flashSaleDuration, display);
};

// Add to Cart Functionality
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({name: productName, price: productPrice});
    alert(`${productName} has been added to your cart!`);
}

// Example: Add event listeners for 'Add to Cart' buttons (to be connected to dynamic products)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let productName = this.previousElementSibling.previousElementSibling.textContent;
        let productPrice = this.previousElementSibling.textContent;
        addToCart(productName, productPrice);
    });
});
