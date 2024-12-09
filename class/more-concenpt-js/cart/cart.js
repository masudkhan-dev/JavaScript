const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";

  displayProduct(product, quantity);
  saveLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");

  li.innerText = `${product} : ${quantity}`;
  li.classList.add(`list-disc`);

  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  const cart = {};
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// save local store
const saveLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
  console.log(cartStringify);
};

const displayProductFromLocalStorage = () => {
  const savedCart = saveLocalStorage();

  for(const product of savedCart){
    console.log(product)
  }
};

displayProductFromLocalStorage();
