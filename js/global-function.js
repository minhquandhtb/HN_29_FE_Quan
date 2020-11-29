function loadDefault() {
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    cartItems = JSON.parse(localStorage.getItem("cart"));
  }
}
function cartIcon() {
  if (cartItems.length != 0) {
    var total = 0;
    for (let i=0;i<cartItems.length;i++) {
      total += cartItems[i].quantity;
    }
    document.getElementById("cart-icon-quantity").innerHTML = total;
  }
}
loadDefault();
cartIcon();
