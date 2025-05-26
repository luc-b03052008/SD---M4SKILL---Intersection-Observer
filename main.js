

document.addEventListener('DOMContentLoaded', () => {
   
    let cartBadge = document.createElement('span');
    cartBadge.className = 'cart-badge';
    cartBadge.textContent = '0';

    
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

    
    document.querySelectorAll('.product').forEach(product => {
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'product__remove-button';
        removeBtn.style.marginLeft = '10px';
        removeBtn.disabled = product.classList.contains('product--not-available');
        product.appendChild(removeBtn);
    });

    
    document.querySelectorAll('.product__button').forEach((btn) => {
        btn.addEventListener('click', function () {
            if (btn.disabled) return;
            cartCount++;
            cartBadge.textContent = cartCount;
            alert('Product is toegevoegd aan het winkelmandje!');
        });
    });

    
    document.querySelectorAll('.product__remove-button').forEach((btn) => {
        btn.addEventListener('click', function () {
            if (cartCount > 0) {
                cartCount--;
                cartBadge.textContent = cartCount;
            }
        });
    });
});

const products = [
  ["Nike Phantom Gx ii Pro Fg", 157, "schoen.jpg", "High-performance football boots for professionals.", true],
  ["Adidas Predator Edge", 170, "foto2.webp", "Control-enhancing football boots for precision play.", false],
  ["Puma Future Z", 145, "schoen2.webp", "Dynamic football boots for agile players.", true]
];

const productsContainer = document.querySelector('.products');

products.forEach(([title, price, image, description, available]) => {
  const article = document.createElement('article');
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  if (!available) productDiv.classList.add('product--not-available');

  productDiv.innerHTML = `
    <img class="product__img" src="${image}" alt="${title}">
    <h2 class="product__title">${title}</h2>
    <p class="product__description">${description}</p>
    <h3 class="product__price">$${price}</h3>
    <button class="product__button ${!available ? 'product__button--disabled' : ''}" ${!available ? 'disabled' : ''}>
      ${available ? 'Add to cart' : 'Not Available'}
    </button>
  `;

  article.appendChild(productDiv);
  productsContainer.appendChild(article);
});





