if(localStorage.getItem('cart')!=null){
  cartItems = JSON.parse(localStorage.getItem('cart'));
}
function addCart(item) {
  var cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  
  var link = document.createElement("div");
  link.className = "link flex-x-y";
  var img = document.createElement("img");
  img.src=item.link;
  img.alt="img";
  link.append(img);

  var name = document.createElement("div");
  name.className = "name flex-x-y";
  name.innerHTML=item.name;
  var price = document.createElement("div");
  price.className = "price flex-x-y";
  price.innerHTML=item.price;

  var quantity = document.createElement("div");
  quantity.className = "quantity flex-x-y";
  quantity.innerHTML=item.quantity;

  var total = document.createElement("div");
  total.className = "total flex-x-y";
  total.innerHTML=item.price*item.quantity;

  var remove = document.createElement("div");
  remove.className = "remove flex-x-y";
  remove.setAttribute("id", item.id);
  remove.setAttribute("onclick", "removeCart(this)")
  var iTag=document.createElement("i");
  iTag.className="fa fa-trash";
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
function buy(){
  alert("Đặt hàng thành công");
  cartItems.splice(0, cartItems.length);
  localStorage.removeItem("cart");
  location.reload();
}
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
function address(){
  var h1=document.createElement("h1");
  h1.innerHTML="Nhập địa chỉ";
  document.getElementById("address").appendChild(h1);
  var form=document.createElement("form");
  form.className="flex-column-y"
  var name=document.createElement("input")
  name.setAttribute("type","text");
  name.setAttribute("placeholder","Họ và tên");

  var phoneNumber=document.createElement("input")
  phoneNumber.setAttribute("type","text");
  phoneNumber.setAttribute("placeholder","Số điện thoại");

  var address=document.createElement("input")
  address.setAttribute("type","text");
  address.setAttribute("placeholder","Địa chỉ");

  form.appendChild(name);
  form.appendChild(phoneNumber);
  form.appendChild(address);
  document.getElementById("address").appendChild(form);
  document.getElementById("btn-buy").innerHTML="Đặt hàng";
  document.getElementById("btn-buy").setAttribute("onclick", "buy()");

}

function removeCart(btn){
  idRemoveCart="cart-"+btn.id;
  for (let index = 0; index < cartItems.length; index++) {
    if(idRemoveCart=="cart-"+cartItems[index].id){
      cartItems.splice(index,1);
      break;
    }
  }
  localStorage.setItem('cart',JSON.stringify(cartItems));
  location.reload();
}