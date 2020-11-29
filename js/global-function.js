function cartIcon(){
    cartItems = JSON.parse(localStorage.getItem("cart"));
    if(cartItems.length!=0){
        var i=0;
        for(each in cartItems){
            i+=each.quantity;
        }
        document.getElementById('cart-icon-quantity').innerHTML=i;
    } 
}
cartIcon();