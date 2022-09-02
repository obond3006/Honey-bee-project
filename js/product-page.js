(function() {
   
    function showInfo() {
        const product = JSON.parse(localStorage.product || "{}");
        if (!product) return;

        const productCard = document.querySelector(".product__card");

        productCard.innerHTML = `
            <div class="product-image__container">
            <img class="product-image" src="${product.img}" alt="">
        </div>
        <div class="product-description__container">
            <p class="in-stock-label">
                In stock
            </p>
            <h3 class="product__page-subheader">
            ${product.name}
            </h3>
            <p class="product-code">
                Product code ${product.id}
            </p>
            <p class="product-price">
                $${product.price}USD
            </p>
            <hr class="product__page-divider">
            <div class="product__page-inputs">
                <input class="product__page-input" type="number" value="1" min="1">
                <input class="product__page-button" type="button" value="Add to cart">
            </div>
            <p class="product-description-heading">
                Description
            </p>
            <hr class="product__page-divider">
            <p class="product-description">
                ${product.description}
            </p>
            <br>
            <p class="product-description">
                Weight: ${product.weight}g
            </p>
        </div>`;      
    }
  
    showInfo();
  
  })();