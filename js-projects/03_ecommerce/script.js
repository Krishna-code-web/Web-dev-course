document.addEventListener("DOMContentLoaded", function(){
    let productList = document.getElementById('product-list');
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    let price = document.getElementById('total-price');
    let checkOut = document.getElementById('checkout-btn');
    let emptyCart = document.getElementById('empty-cart');

    let products = [
        {id: 1, name: 'Product 1', price: 29.99},
        {id: 2, name: 'Product 2', price: 19.99},
        {id: 3, name: 'Product 3', price: 59.999}
    ];

    let cart = JSON.parse(localStorage.getItem('Cart')) || [];

    if(cart.length != 0){
        renderCart(cart);
    }

    renderProducts(products);

    function renderProducts(products){
        products.forEach(product => {
        let element = document.createElement('div');
        element.classList.add('product');
        element.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id=${product.id}>Add to cart</button>
        `;
        productList.appendChild(element);
    });
    }

    productList.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON'){
            const id = parseInt(e.target.attributes['data-id'].value);
            const product = products.find((product) => id===product.id);
            cart.push(product);
            localStorage.setItem('Cart', JSON.stringify(cart));
            renderCart(cart);
        } 
    })

    cartItems.addEventListener("click", function(e){
        if(e.target.tagName === 'BUTTON'){
            const id = parseInt(e.target.attributes['data-id'].value);
            cart = cart.filter((product) => id!==product.id);
            localStorage.setItem('Cart',JSON.stringify(cart));
            renderCart(cart);
        }

    })

    function renderCart(cart){
        let totalCost = 0;
        cartItems.textContent = "";
        if(cart.length == 0){
            price.innerText = `$${totalCost.toFixed(2)}`;
            cartTotal.classList.add('hidden');
            emptyCart.classList.remove('hidden');
            return;
        }
        cart.forEach(product => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cartItem');
            cartItem.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="delete-button" data-id=${product.id}>Delete</button>
            `
            totalCost += product.price;
            cartItems.appendChild(cartItem);
        })

        price.innerText = `$${totalCost.toFixed(2)}`;
        emptyCart.classList.add('hidden');
        cartTotal.classList.remove('hidden');
    }

    checkOut.addEventListener('click', function(){
        checkout();
    })

    function checkout(){
        alert("Checkout Successful.")
        cart.length = 0;
        cartTotal.classList.add('hidden');
        emptyCart.classList.remove('hidden');
        renderCart(cart);
        localStorage.clear();
    }
})