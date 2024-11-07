async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

function displayProducts(products) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
    <img src = "${product.image}" alt="${product.title}" class = "product-image">    
    <div class="product-info">

    <h2 class="product-title">${product.title}</h2>
    <p class="product-description">${product.description}</p>
    <p class="product-price">${product.price}</p>
    <p class="product-price">Rating : ${product.rating.rate} ${product.rating.count}</p>
    <button class="add-to-cart">Add to cart</button>
    </div>
    `;

    productContainer.appendChild(productCard);
  });
}

window.onload = fetchProducts;

//event loop
