function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cartItems));
    alert(cartItems);
}
//saveCart();