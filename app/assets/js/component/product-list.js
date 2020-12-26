function productList() {
    // Query String
    const params = new URLSearchParams(window.location.search);
    const categoryLatinTitle = params.get('category');

    let data = [];
    if (categoryLatinTitle === null) {
        data = productData;
    } else {
        const categoryItem = categoryData.find(x => x.latinTitle === categoryLatinTitle);
     
        data = productData.filter(x => x.categoryId === categoryItem.id);
    }

    Product.render(data);
    Filter.generate(data);
}