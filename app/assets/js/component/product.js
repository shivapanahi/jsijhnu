class Product {
    constructor() {
        this._data = [];
    }

    static addCart(id) { // private
        Cart.add(id);
        this.render(this._data);
    }

    static updateCart(id, value) { // private
        Cart.update(id, value);
        this.render(this._data);
    }

    static render(data) {
        this._data = data;
        const products = document.querySelector('#product-list');
        products.innerHTML = '';

        if(data.length > 0) {
            data.map((item) => {
                const cartItem = Cart.searchById(item.id);
                products.innerHTML += `
        <div class="col-md-3 col-xs-12">
            <div class="item">
                <div class="image">
                    <img class="source" src="${item.image}" />
                    <div class="control">
                        <button class="button">
                            <i class="feather icon-heart"></i>
                        </button>
                        <button class="button">
                            <i class="feather icon-bookmark"></i>
                        </button>
                        <button class="button">
                            <i class="feather icon-navigation"></i>
                        </button>
                    </div>
                </div>
                <div class="body">
                    <div class="text">
                        <p class="description">${item.title.littleText()}</p>
                        <span class="price">${(item.price).formatCurrency()}</span>
                    </div>
                    ${
                    (cartItem === undefined) ?
                        `<button class="button-cart" onclick="Product.addCart(${item.id})">
                            <span class="icon">
                                <i class="feather icon-shopping-cart"></i>
                            </span>
                            <span>افزودن به سبد</span>
                        </button>`
                        :
                        `<div class="button-plus-minus">
                            <button class="button-control" onclick="Product.updateCart(${item.id}, 1)">
                                <i class="feather icon-plus"></i>
                            </button>
                            <span class="cart-display">${cartItem.qty}</span>
                            <button class="button-control" onclick="Product.updateCart(${item.id}, -1)">
                                <i class="feather icon-minus"></i>
                            </button>
                        </div>`
                }
                </div>
            </div>
        </div>`
            })
        } else {
            products.innerHTML = `
                <div>
                    <img src="./app/assets/img/empty.png" />
                    <p>لیست خالی است</p>
                </div>
            `
        }
    }
}