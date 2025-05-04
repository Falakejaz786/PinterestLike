function updateCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('total-price');
  let total = 0;


  cartItemsContainer.innerHTML = '';


  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
    cartItemsContainer.appendChild(itemElement);
    total += item.price; 
  });


  totalPriceContainer.textContent = `Total: ₹${total}`;
}


document.getElementById('clear-cart-btn').addEventListener('click', () => {
  localStorage.removeItem('cart');
  updateCart();
});


updateCart();
