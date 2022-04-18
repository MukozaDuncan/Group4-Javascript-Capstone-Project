window.addEventListener("load", () => {

    let Products = [{
      keyvalue: "pc1",
      catname: 'Laptop Computers',
      contents: [
        {
          id: 'pc1-1',
          name: 'Hp Probook 455 G7',
          image: './assets/images/products/featured.png',
          price: 3000000,
          details: '<ul class="specs"><li>8GB RAM</li> <li>1TB ROM</li> <li>Ryzen 5 prcessor</li></ul>'
        },
        {
          id: 'pc1-2',
          name: 'Gamer Computers',
          image: './assets/images/products/gamer.png',
          price: 5000000,
          details: '<ul class="specs"><li>PRO Gtx Video Editing</li> <li>Office 365</li> <li>Included AMD</li> <li>256GB SSD</li></ul>'
        },
        {
          id: 'pc1-3',
          name: 'Lenovo ThinkPad T490s',
          image: './assets/images/products/lenovo.png',
          price: 3000000,
          details: '<ul class="specs"><li>Touchscreen Laptop</li> <li>Intel Core i7</li> <li>8GB RAM</li> <li>512GB SSD</li></ul>'
        }
      ]
    }]
  
      let featuredProducts = [
        {
            id: "pc1-1",
            newprice: 2500000,
            bgcolor: "linear-gradient(to bottom, /*43deg,*/ #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        },
        {
            id: "pc1-2",
            newprice: 4500000,
            bgcolor: "linear-gradient(to bottom, /*160deg,*/ #0093E9 0%, #80D0C7 100%)"
        },
        {
            id: "pc1-3",
            newprice: 2000000,
            bgcolor: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"
        }
    ]
  
    // Beginning of featured Products.
    let featuredContainer = document.querySelector('.featured');
    let featuredList = document.querySelector('.featured-list');
    let getProduct = "Get it at: ";
  
    featuredProducts.map(item => {
      let productId = item.id;
      let newFeaturedPrice = item.newprice;
    //   featuredContainer.setAttribute("style", "background: "+item.bgcolor+";");
      let catId = (productId).split("-")[0];
      let category = Products.filter(cat => cat.keyvalue === catId);
      category.map(featitem => {
  
        let categoryContents = featitem.contents;
        categoryContents.filter(content => content.id === productId).map(fitem => {
          let featuredItem = document.createElement('div');
          featuredItem.classList.add('featured-product');
          featuredItem.classList.add('w3-animate-right');
  
          let featuredProductImage = document.createElement('div');
          featuredProductImage.classList.add('product');
          let featuredImage = document.createElement('img');
          featuredImage.classList.add('featured-image');
          featuredImage.setAttribute("src", fitem.image);
          featuredImage.setAttribute("height", "300px");
          featuredProductImage.appendChild(featuredImage);
  
          let featuredProductDetails = document.createElement('div');
          featuredProductDetails.classList.add('product-details');
          let featuredName = document.createElement('div');
          featuredName.classList.add('product-name');
          featuredName.innerHTML = fitem.name;
          let featuredSpecs = document.createElement('div');
          featuredSpecs.classList.add('product-specs');
          featuredSpecs.innerHTML = fitem.details;
          let featuredPrice = document.createElement('div');
          featuredPrice.classList.add('product-price');
          let oldPrice = document.createElement('div');
          oldPrice.classList.add('old-price');
          let dispOldPrice = document.createElement('span');
          dispOldPrice.innerHTML = "Ugx. "+fitem.price+"/=";
          oldPrice.append(getProduct, dispOldPrice);
          let newPrice = document.createElement('div');
          newPrice.classList.add('new-price');
          newPrice.innerHTML = "Ugx. "+newFeaturedPrice+"/=";
          featuredPrice.append(oldPrice, newPrice);
          // let featuredProductOrder = document.createElement('div');   //(Soon to add the action.)
          // featuredProductOrder.classList.add('add-to-cart-btn');
          // featuredProductOrder.innerHTML = "Add to Cart";
          featuredProductDetails.append(featuredName, featuredSpecs, featuredPrice, /*featuredProductOrder*/);
  
          featuredItem.append(featuredProductImage, featuredProductDetails);
          featuredList.appendChild(featuredItem);
        })
      })
    })
});