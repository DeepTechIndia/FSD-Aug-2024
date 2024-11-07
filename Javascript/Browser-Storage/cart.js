let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function displayCart() {
  const cartItemElement = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartItemElement.innerHTML = "";
  //   totalPriceElement.textContent = `Total`;
  let total = 0;

  cart.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemElement.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: $${total}`;
}



function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
