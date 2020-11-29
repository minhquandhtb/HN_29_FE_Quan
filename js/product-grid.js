if (localStorage.getItem("cart") != null) {
  cartItems = JSON.parse(localStorage.getItem("cart"));
}
function loadProduct(pageNumber, product) {
  var productOnAPage;
  productOnAPage = product.slice(9 * pageNumber - 9, 9 * pageNumber);
  for (i = 0; i < 9; i++) {
    if (i >= productOnAPage.length) {
      document.getElementById("id-" + (i + 1)).style.display = "none";
    } else {
      document.getElementById("id-" + (i + 1)).style.display = "block";
      document.querySelector("#id-" + (i + 1) + " .id").innerHTML =
        productOnAPage[i].id;
      document.querySelector("#id-" + (i + 1) + " .title").innerHTML =
        productOnAPage[i].name;
      document.querySelector("#id-" + (i + 1) + " .link").src =
        productOnAPage[i].link;
      document.querySelector("#id-" + (i + 1) + " .price").innerHTML =
        productOnAPage[i].price;
      document.querySelector("#id-" + (i + 1) + " .original").innerHTML =
        productOnAPage[i].original;
    }
  }
}

function load(pageNumber) {
  var url = "../js/db.json";
  var request;
  var product;
  request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jsonObj = JSON.parse(request.responseText);
      product = jsonObj.product;
      loadProduct(pageNumber, product);
    }
  };
  request.open("GET", url, true);
  request.send();
}
function addCart(btn) {
  var location = btn.value;
  var id = document.querySelector("#" + location + " .id").innerHTML;
  var name = document.querySelector("#" + location + " .title").innerHTML;
  var link = document.querySelector("#" + location + " .link").src;
  var price = document.querySelector("#" + location + " .price").innerHTML;
  var quantity;
  var check;
  var cartItem = {
    id: id,
    name: name,
    link: link,
    price: price,
    quantity: 1,
  };
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItem.id == cartItems[i].id) {
      cartItems[i].quantity++;
      check = 1;
      break;
    }
  }
  if (check != 1) {
    cartItems.push(cartItem);
  }
  document.getElementById("addSuccessfully").style.display = "flex";
  setTimeout(function () {
    document.getElementById("addSuccessfully").style.display = "none";
  }, 800);
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
load(1);
