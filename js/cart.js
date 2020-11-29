if (localStorage.getItem("cart") != null) {
  cartItems = JSON.parse(localStorage.getItem("cart"));
}
if (cartItems.length == 0) {
  var empty = document.createElement("h1");
  empty.innerHTML = "Giỏ hàng trống";
  empty.setAttribute("style", "text-align: center");
  document.getElementById("list-cart").appendChild(empty);
  document.getElementById("wrapper-btn").style.display = "none";
}
function validate() {
  var name = document.forms["shipmentDetailsForm"]["name"].value;
  var phone = document.forms["shipmentDetailsForm"]["phone"].value;
  var address = document.forms["shipmentDetailsForm"]["address"].value;
  if (name == "" || phone == "" || address == "") {
    alert("Vui lòng không để trống");
  } else if (isNaN(phone)) {
    alert("Số điện thoại là một số");
  } else {
    pay();
  }
}
function addCart(item) {
  var cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  var link = document.createElement("div");
  link.className = "link flex-x-y";
  var img = document.createElement("img");
  img.src = item.link;
  img.alt = "img";
  link.append(img);

  var name = document.createElement("div");
  name.className = "name flex-x-y";
  name.innerHTML = item.name;
  var price = document.createElement("div");
  price.className = "price flex-x-y";
  price.innerHTML = item.price;

  var quantity = document.createElement("div");
  quantity.className = "quantity flex-x-y";
  quantity.innerHTML = item.quantity;

  var total = document.createElement("div");
  total.className = "total flex-x-y";
  total.innerHTML = item.price * item.quantity;

  var remove = document.createElement("div");
  remove.className = "remove flex-x-y";
  remove.setAttribute("id", item.id);
  remove.setAttribute("onclick", "removeCart(this)");
  var iTag = document.createElement("i");
  iTag.className = "fa fa-trash";
  remove.appendChild(iTag);

  cartItem.appendChild(link);
  cartItem.appendChild(name);
  cartItem.appendChild(price);
  cartItem.appendChild(quantity);
  cartItem.appendChild(total);
  cartItem.appendChild(remove);

  document.getElementById("list-cart").appendChild(cartItem);
}
for (x in cartItems) {
  addCart(cartItems[x]);
}
function buy() {
  alert("Đặt hàng thành công");
  localStorage.removeItem("cart");
}
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
function pay() {
  document.getElementById("pay").style.display = "flex";
  document.querySelector("#step-2 .circle").style.borderColor = "orange";
  document.querySelector("#step-2 .rectangle").style.backgroundColor = "orange";
  document.getElementById("shipment-details").style.display = "none";
  document.getElementById("btn-buy").innerHTML = "Đặt hàng";
  document.getElementById("btn-buy").setAttribute("onclick", "buy()");
}
function shipmentDetails() {
  document.getElementById("shipment-details").style.display = "flex";
  document.getElementById("list-cart").style.display = "none";
  document.getElementById("wrapper-btn").style.display = "none";
  document.getElementById("process").style.display = "flex";
  document.querySelector("#step-1 .circle").style.borderColor = "orange";
}
function removeCart(btn) {
  idRemoveCart = "cart-" + btn.id;
  for (let index = 0; index < cartItems.length; index++) {
    if (idRemoveCart == "cart-" + cartItems[index].id) {
      cartItems.splice(index, 1);
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
}
