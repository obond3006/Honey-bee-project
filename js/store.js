(function() {

    const products = [
        {
            id: "18",
            img: "img/store/wildflower-honey.jpeg",
            name: "Wildflower Honey",
            price: 7,
            description: "This honey is harvested from sunny Californian meadows. It features mild taste and intense aroma. Great for your breakfasts!",
            weight: 300,
        },
        {
            id: "19",
            img: "img/store/blossom-honey.jpeg",
            name: "Blossom Honey",
            price: 20,
            description: "With a tender aroma and mild taste, this honey is harvested from selected bee areas and flower varieties in California. It is universal honey to everyone's liking.",
            weight: 450,
        },
        {
            id: "20",
            img: "img/store/clover-honey.jpeg",
            name: "Clover Honey",
            price: 8,
            description: "This pure raw honey is harvested in California by our beekeepers. It has a light color and a very tender taste, perfect for pairing it with different dishes.",
            weight: 300,
        },
        {
            id: "21",
            img: "img/store/buckwheat-honey.jpeg",
            name: "Buckwheat Honey",
            price: 10,
            description: "It is highly nutritious honey with a robust taste and molasses-like color. The honey is very rich in vitamins and minerals, as well as antioxidants.",
            weight: 300,
        },
        {
            id: "22",
            img: "img/store/citrus-blossom-honey.jpeg",
            price: 15,
            name: "Citrus Blossom Honey",
            description: "Amber-colored honey with sweet taste and citrus aroma. The best match for your morning toasts and pancakes!",
            weight: 450,
        }
    ];

    function productInfoClick(ev) {
        const productId = ev.target.dataset.id;
        const product = products.filter( product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
      }

    function renderStore(products) {
        const storeContainer = document.querySelector(".store__products-carousel");
        storeContainer.innerHTML = '';
        for(const item of products) {
            storeContainer.innerHTML += `
        <div class="store__products-carousel-element">
            <a href="product.html" class="info-link"><img data-id=${item.id} class="carousel-product-thumb" src="${item.img}"
                    alt="${item.name}"></a>
            <h4 class="carousel-product-name">${item.name}</h4>
            <h5 class="carousel-product-price">$${item.price}USD</h5>
            <a href="product.html" data-id=${item.id} class="buy-product info-link">Buy now</a>
        </div>`;
        }
        document.querySelectorAll('.info-link')
        .forEach( link => link.addEventListener('click', productInfoClick) );
    }

    renderStore(products);

})();