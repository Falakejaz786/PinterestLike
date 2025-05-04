document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const priceText = button.dataset.price.replace('$', '');
      const price = parseFloat(priceText);

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      cart.push({ name, price });

      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${name} added to cart!`);
    });
  });
});
