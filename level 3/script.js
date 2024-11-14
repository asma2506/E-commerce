let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    saveCart();
}

function updateCartCount() {
    document.getElementById("cart").textContent = `Cart (${cart.length})`;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    cart = savedCart ? savedCart : [];
    updateCartCount();
    displayCartItems();
}

function displayCartItems() {
    const cartItemsSection = document.getElementById("cartItems");
    cartItemsSection.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItemsSection.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function completePayment() {
    alert("Payment completed!");
    cart = [];
    saveCart();
    window.location.href = "index.html";
}
// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

  // Update Cart
function updateCart() {
    cartButton.textContent = `Cart (${cart.length})`;

    // Update Cart Modal
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
const itemElement = document.createElement('div');
itemElement.classList.add('cart-item');
itemElement.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>`;
cartItemsContainer.appendChild(itemElement);
total += item.price;
    });

    totalPriceContainer.textContent = total.toFixed(2);
}
  // Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

  // Show Cart
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

  // Close Cart
closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});


window.onload = loadCart;
