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
function pay(){
  var h1=document.createElement("h1");
  h1.innerHTML="Thanh toán";
  document.getElementById("pay").appendChild(h1);
  var form=document.createElement("form");

  var cod=document.createElement("div");
  var radioCod=document.createElement("input");
  radioCod.setAttribute("type","radio");
  radioCod.setAttribute("id","cod");
  radioCod.setAttribute("name","pay")
  radioCod.setAttribute("value","cod");
  var labelCod=document.createElement("label");
  labelCod.setAttribute("for","cod");
  labelCod.innerHTML="Thanh toán tiền mặt";
  cod.appendChild(radioCod);
  cod.appendChild(labelCod);

  var bank=document.createElement("div");
  var radioBank=document.createElement("input");
  radioBank.setAttribute("type","radio");
  radioBank.setAttribute("id","bank");
  radioBank.setAttribute("name","pay")
  radioBank.setAttribute("value","bank");
  var labelBank=document.createElement("label");
  labelBank.setAttribute("for","bank");
  labelBank.innerHTML="Thanh toán qua ngân hàng";
  bank.appendChild(radioBank);
  bank.appendChild(labelBank);

  var eWallet=document.createElement("div");
  var radioEWallet=document.createElement("input");
  radioEWallet.setAttribute("type","radio");
  radioEWallet.setAttribute("id","e-wallet");
  radioEWallet.setAttribute("name","pay")
  radioEWallet.setAttribute("value","e-wallet");
  var labelEWallet=document.createElement("label");
  labelEWallet.setAttribute("for","e-wallet");
  labelEWallet.innerHTML="Thanh toán qua ví điện tử";
  eWallet.appendChild(radioEWallet);
  eWallet.appendChild(labelEWallet);
  
  
  form.appendChild(cod);
  form.appendChild(bank);
  form.appendChild(eWallet);

  document.getElementById("pay").appendChild(form);
  document.querySelector("#step-2 .circle").style.borderColor=("orange");
  document.querySelector("#step-2 .rectangle").style.backgroundColor=("orange");
  document.getElementById("address").style.display=("none");
  document.getElementById("btn-buy").innerHTML="Đặt hàng";
  document.getElementById("btn-buy").setAttribute("onclick", "buy()");
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
  document.getElementById("list-cart").style.display=("none");
  document.getElementById("process").style.display=("flex");
  document.querySelector("#step-1 .circle").style.borderColor=("orange");
  document.getElementById("btn-buy").innerHTML="Thanh toán";
  document.getElementById("btn-buy").setAttribute("onclick", "pay()");

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