// import { Products } from './../assets/products/Products'

window.addEventListener("load", () => {

  let Products = [{
    keyvalue: "pc1",
    catname: 'Laptop Computers',
    contents: [
      {
        id: 'pc1-1',
        name: 'Hp Probook 455 G7',
        image: './assets/images/products/featured.png',
        price: 2500000,
        details: '8GB RAM 1TB ROM Ryzen 5 prcessor.'
      },
      {
        id: 'pc1-2',
        name: 'Gamer Computers',
        image: './assets/images/products/gamer.png',
        price: 4500000,
        details: 'PRO Gtx Video Editing Office 365 Included AMD 256GB SSD.'
      },
      {
        id: 'pc1-3',
        name: 'Lenovo ThinkPad T490s',
        image: './assets/images/products/lenovo.png',
        price: 2000000,
        details: 'Touchscreen Laptop Intel Core i7 8GB RAM 512GB SSD.'
      }
    ]
    }]
    let displayProducts = document.querySelector('#daily-products');

    // const Product = JSON.parse(Products);

    Products.map((item, keyvalue) => {
        let productCategory = document.createElement('div');
        productCategory.classList.add('category');

        let catHeading = document.createElement('div');
        catHeading.classList.add('cat-heading');
        catHeading.innerHTML = item.catname+".";
        productCategory.appendChild(catHeading);

        let itemId = item.keyvalue;
        productCategory.id = itemId;

        let productRow = document.createElement('div');
        productRow.classList.add('product-row');

        Products.filter(items => items.keyvalue === itemId).map(item => (item.contents.map(proditem => {
            let productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.id = proditem.id;

            let productImage = document.createElement('div');
            productImage.classList.add('image');
            let itemImage = document.createElement('img');
            itemImage.setAttribute("src", proditem.image);
            itemImage.setAttribute("alt", proditem.name);
            itemImage.setAttribute("width", "30px");
            itemImage.setAttribute("height", "90px");
            productImage.appendChild(itemImage);

            let hLine = document.createElement('hr');

            let productDetails = document.createElement('div');
            productDetails.classList.add('product-item-details');
            let productName = document.createElement('div');
            productName.classList.add('product-name');
            productName.innerHTML = proditem.name;

            let productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.innerHTML = "Ugx. "+proditem.price+"/=";

            let selectItemBtn = document.createElement('div');
            selectItemBtn.classList.add('add-to-cart-btn');
            selectItemBtn.setAttribute("onClick", "clickItem(this.id)");
            selectItemBtn.id = proditem.id;
            let selectBtnText = document.createElement('p');
            selectBtnText.innerHTML = "Add to Cart";
            selectItemBtn.appendChild(selectBtnText);
            
            productDetails.append(productName, productPrice, selectItemBtn);
            productItem.append(productImage, hLine, productDetails);
            productRow.appendChild(productItem);
        }))
        )

        productCategory.appendChild(productRow);
        displayProducts.appendChild(productCategory);
    })

});