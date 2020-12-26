let _data = [];

let filterData = {
    color: null,
    fromPrice: null,
    toPrice: null
}

window.onload = () => {
    document.querySelector('#sortByPrice').addEventListener('change', (e) => {
        Filter.sorting(parseInt(e.target.value));
    })

    document.querySelector('#filterColor').addEventListener('change', (e) => {
        filterData.color = e.target.value;
    })

    document.querySelector('#filterFromPrice').addEventListener('keyup', (e) => {
        filterData.fromPrice = e.target.value;
    })

    document.querySelector('#filterToPrice').addEventListener('keyup', (e) => {
        filterData.toPrice = e.target.value;
    })
}

class Filter {
    static generate(data) {
        _data = data;
    }

    static run() {
        let listFiltered = _data;
        if(filterData.color != null && filterData.color !== 'null') {
            listFiltered = listFiltered.filter(x => x.color === filterData.color);
            Product.render(listFiltered);
        } else {
            Product.render(listFiltered);
        }

        if(filterData.fromPrice != null &&
            filterData.fromPrice !== '' &&
            filterData.toPrice != null &&
            filterData.toPrice !== '') {
            listFiltered = listFiltered.filter(x => x.price >= filterData.fromPrice && x.price <= filterData.toPrice);
            Product.render(listFiltered);
        } else {
            Product.render(listFiltered);
        }
    }

    static sorting(sortType) {
        if(sortType !== 0) {
            function compare(a, b) {
                if (a.price < b.price){
                    return sortType;
                }
                if (a.price > b.price){
                    return sortType * -1;
                }
                return 0;
            }

            const sorted = _data.sort(compare);
            Product.render(sorted);
        }
    }
}