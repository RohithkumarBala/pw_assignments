var productContainer = document.getElementById("productContainer");

var exchangeRate = 74.5; // Assuming a fixed exchange rate of 1 USD = 74.5 INR

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      var priceInINR = (product.price * exchangeRate).toFixed(2); // Convert the price to INR

      var productElement = createProductElement(product, priceInINR);
      productContainer.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to fetch products";
    productContainer.appendChild(errorMessage);
  });

function createProductElement(product, priceInINR) {
  var productElement = document.createElement("div");
  productElement.classList.add("product");

  var imageElement = document.createElement("img");
  imageElement.src = product.image;
  imageElement.alt = product.title;
  productElement.appendChild(imageElement);

  var titleElement = document.createElement("h3");
  titleElement.textContent = product.title;
  productElement.appendChild(titleElement);

  var priceElement = document.createElement("p");
  priceElement.textContent = "₹" + priceInINR; // Display the price in INR
  productElement.appendChild(priceElement);

  return productElement;
}
