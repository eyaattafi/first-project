   var cart = [];
    var cartTotal = 0;

    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        cartTotal += productPrice;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        var cartList = document.getElementById('cart-list');
        var cartTotalElement = document.getElementById('cart-total');
        cartList.innerHTML = '';
        cart.forEach(function (product) {
            var li = document.createElement('li');
            li.textContent = product.name + ' DT' + product.price;
            cartList.append(li);
        });
        cartTotalElement.textContent = cartTotal;
    }

    function checkout() {
        alert('Votre total:' + cartTotal+'DT');
        updateCartDisplay()}