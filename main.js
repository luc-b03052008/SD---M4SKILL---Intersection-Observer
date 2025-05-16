// main.js

document.addEventListener('DOMContentLoaded', () => {
   
    let cartBadge = document.createElement('span');
    cartBadge.className = 'cart-badge';
    cartBadge.textContent = '0';

    // Find the cart icon and append the badge
    const cartIcon = document.querySelector('.navbar__cart');
    cartIcon.style.position = 'relative';
    cartBadge.style.position = 'absolute';
    cartBadge.style.top = '50px';
    cartBadge.style.right = '7.5%';
    cartBadge.style.background = 'red';
    cartBadge.style.color = 'white';
    cartBadge.style.borderRadius = '50%';
    cartBadge.style.padding = '2px 6px';
    cartBadge.style.fontSize = '15px';
    cartBadge.style.transform = 'translate(50%, -50%)';
    cartBadge.style.minWidth = '18px';
    cartBadge.style.textAlign = 'center';
    cartIcon.appendChild(cartBadge);

    let cartCount = 0;

    // Add remove buttons to each product card
    document.querySelectorAll('.product').forEach(product => {
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'product__remove-button';
        removeBtn.style.marginLeft = '10px';
        removeBtn.disabled = product.classList.contains('product--not-available');
        product.appendChild(removeBtn);
    });

    // Handle add to cart
    document.querySelectorAll('.product__button').forEach((btn) => {
        btn.addEventListener('click', function () {
            if (btn.disabled) return;
            cartCount++;
            cartBadge.textContent = cartCount;
            alert('Product is toegevoegd aan het winkelmandje!');
        });
    });

    // Handle remove from cart
    document.querySelectorAll('.product__remove-button').forEach((btn) => {
        btn.addEventListener('click', function () {
            if (cartCount > 0) {
                cartCount--;
                cartBadge.textContent = cartCount;
            }
        });
    });
});


const productsData = [
    [
        "Nike Phantom Gx ii Pro Fg",
        157,
        "/afbeeldingen/d.jpg",
        "High-performance football boots for professionals.",
        true
    ],
    [
        "Adidas Predator Edge",
        170,
        "/afbeeldingen/foto2.webp",
        "Control-enhancing football boots for precision play.",
        false
    ],
    [
        "Puma Future Z",
        135,
        "/afbeeldingen/shopping (1).webp",
        "Dynamic football boots for agile players.",
        true
    ]
];

document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    productsData.forEach(product => {
        const [name, price, img, desc, available] = product;
        const article = document.createElement('article');
        const productDiv = document.createElement('div');
        productDiv.className = 'product' + (available ? '' : ' product--not-available');

        const imgEl = document.createElement('img');
        imgEl.className = 'product__img';
        imgEl.src = img;
        imgEl.alt = name;

        const titleEl = document.createElement('h2');
        titleEl.className = 'product__title';
        titleEl.textContent = name;

        const subtitleEl = document.createElement('p');
        subtitleEl.className = 'product__subtitle';
        subtitleEl.textContent = available ? 'Available' : 'Not Available';

        const descEl = document.createElement('p');
        descEl.className = 'product__description';
        descEl.textContent = desc;

        const priceEl = document.createElement('h3');
        priceEl.className = 'product__price';
        priceEl.textContent = `$${price}`;

        const btn = document.createElement('button');
        btn.className = 'product__button' + (available ? '' : ' product__button--disabled');
        btn.textContent = available ? 'Add to cart' : 'Not Available';
        if (!available) btn.disabled = true;

        productDiv.appendChild(imgEl);
        productDiv.appendChild(titleEl);
        productDiv.appendChild(subtitleEl);
        productDiv.appendChild(descEl);
        productDiv.appendChild(priceEl);
        productDiv.appendChild(btn);

        article.appendChild(productDiv);
        productsSection.appendChild(article);
    });
});