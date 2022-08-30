(function() {

    const storeItems = [
        {
            id: "product-1",
            img: "img/store/wildflower-honey.jpeg",
            name: "Wildflower Honey",
            price: 7,
        },
        {
            id: "product-2",
            img: "img/store/blossom-honey.jpeg",
            name: "Blossom Honey",
            price: 20,
        },
        {
            id: "product-3",
            img: "img/store/clover-honey.jpeg",
            name: "Clover Honey",
            price: 8,
        },
        {
            id: "product-4",
            img: "img/store/buckwheat-honey.jpeg",
            name: "Buckwheat Honey",
            price: 10,
        },
        {
            id: "product-5",
            img: "img/store/citrus-blossom-honey.jpeg",
            name: "Citrus Blossom Honey",
            price: 15,
        }
    ];

    function renderStore(storeItems) {
        const storeContainer = document.querySelector(".store__products-carousel");
        storeContainer.innerHTML = '';
        for(const item of storeItems) {
            storeContainer.innerHTML += `
        <div class="store__products-carousel-element">
            <a href="#"><img class="carousel-product-thumb" src="${item.img}"
                    alt="${item.name}"></a>
            <h4 class="carousel-product-name">${item.name}</h4>
            <h5 class="carousel-product-price">$${item.price}USD</h5>
            <a href="#" class="buy-product">Buy now</a>
        </div>`;
        }
    }

    renderStore(storeItems);

})();