function loadProduct(pageNumber, product) {
  var productOnAPage;
  productOnAPage = product.slice(9 * pageNumber - 9, 9 * pageNumber);
  for (i = 0; i < 9; i++) {
    if (i >= productOnAPage.length) {
      document.getElementById("id-" + (i + 1)).style.display = "none";
    } else {
      document.getElementById("id-" + (i + 1)).style.display = "block";
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
  cartItems = JSON.parse(localStorage.getItem('cart'))
  var id=btn.value;
  var name=document.querySelector('#'+id+' .title').innerHTML;
  var link=document.querySelector('#'+id+' .link').src;
  var price=document.querySelector('#'+id+' .price').innerHTML;
  var cartItem={
    "name":name,
    "link":link,
    "price":price
  };
  cartItems.push(cartItem);
  localStorage.setItem('cart',JSON.stringify(cartItems)); 
}
load(1);
