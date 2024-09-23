// Cart logic to manage cart data
function displayCartItems() {
    let cartItems = cart; // Retrieve from local storage or global variable

    // Populate cart with items
    cartItems.forEach(item => {
        console.log(`Item: ${item.name}, Price: ${item.price}`);
        // Update DOM to display cart items dynamically
    });
}

function updateSubtotal() {
    let subtotal = cart.reduce((total, item) => total + parseFloat(item.price), 0);
    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
}
