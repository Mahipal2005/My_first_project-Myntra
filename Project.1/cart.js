let Authen = localStorage.getItem('auth') || "Not Authenticated"
if (Authen != "authorized") {

    window.location.href = "login_signup.html"
}
let product = document.getElementById('product');
let cart = JSON.parse(localStorage.getItem('cart'));




cart.forEach(obj => {
    let div = document.createElement('div');
    let image = document.createElement('img')
    image.src = obj.img_responsive_src
    image.style.height = "300px"
    let h3 = document.createElement('h3');
    h3.innerText = obj.product_brand;
    let pTag = document.createElement('p')
    pTag.innerText = obj.product_product
    let span1 = document.createElement('span')
    span1.innerText = obj.product_discountedPrice
    let span2 = document.createElement('span')
    span2.innerText = ` ${obj.product_strike}`
    span2.setAttribute('id', 'span2')
    let span3 = document.createElement('span')
    span3.innerText = obj.product_discountPercentage
    span3.style.color = "rgb(255,194,165)"
    span3.setAttribute('id', 'span3')
    remove_btn=document.createElement('button')
    remove_btn.innerText="Remove cart"
    remove_btn.style.margin="8px"
    remove_btn.addEventListener('click', function() {
        // Find the index of the item to be removed
        const indexToRemove = cart.findIndex(item => item.product_brand === obj.product_brand && item.product_product === obj.product_product);

        // If the item is found in the cart, remove it and update localStorage
        if (indexToRemove !== -1) {
            cart.splice(indexToRemove, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Remove the HTML element from the cart display
            div.remove();
        }
    });

    buynow=document.createElement('button')
    buynow.innerText="Buy Now"

    div.append(image, h3, pTag, span1, span2, span3,remove_btn,buynow);
    product.appendChild(div);
})
