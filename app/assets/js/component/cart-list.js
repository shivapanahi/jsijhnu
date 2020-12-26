class cartList {
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

        const getCart= Cart.getData();
        // console.log(getCart);

        

        const d = getCart.map(d=>d.id);
        // console.log(d);
        

        const qty = getCart.map(d=>d.qty);
        let temp=0;
            for( let i=0 ; i< qty.length ; i++){
                temp =temp+ qty[i];   
            } 


        const cartListFiltered= productData.filter(x => d.includes (x.id));
        // console.log(cartListFiltered);



    
        
        const productCart = document.querySelector('#cart-list');
        productCart.innerHTML = '';

        if(cartListFiltered.length > 0) {
            let priceTemp= 0;  
            // console.log(' out of map',shiva);
            cartListFiltered.map((item) => {


                const cartItem = Cart.searchById(item.id); 
                const x= item.price;
                let z = x*cartItem.qty; 
                // console.log('z',z);
                priceTemp = priceTemp +  z;
                // console.log('inside map' ,shiva);


                productCart.innerHTML += `
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
                        <span class="price">${(z).formatCurrency()}</span>
                    </div> 
                        <div class="button-plus-minus">
                            <button class="button-control" onclick="cartList.updateCart(${item.id}, 1)">
                                <i class="feather icon-plus"></i>
                            </button>
                            <span class="cart-display">${cartItem.qty}</span>
                            <button class="button-control" onclick="cartList.updateCart(${item.id}, -1)">
                                <i class="feather icon-minus"></i>
                            </button>
                        </div>
                </div>
            </div>
        </div>` 
            
            })
            const cartCollectQty = document.querySelector('#cart-collect-qty');
            cartCollectQty.innerHTML =`${temp}`;
            const cartCollectPrice = document.querySelector('#cart-collect-price');  
            cartCollectPrice .innerHTML =`${(priceTemp).formatCurrency()}`;
 
            // console.log('after map' ,shiva);
       
            
        } else {
            productCart.innerHTML = `
                <div>
                    <img src="./app/assets/img/empty.png" />
                    <p>لیست خالی است</p>
                </div>
            `
        }
    }
}