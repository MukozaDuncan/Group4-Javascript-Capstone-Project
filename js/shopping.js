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

let newItem = document.querySelector('.add-to-cart-btn');
let shoppingList =document.querySelector('#item-list');
let qtyLabel = "Qty: ";

function presentItems(){
  const cartItems = JSON.parse(localStorage.getItem('shoppingList'));
  if(cartItems){
    let cartItemsNodeList = cartItems.map( shopcartitem => {

      let listedId = shopcartitem.id;
      let catId = listedId.split("-")[0];

      let selectedCat = Products.filter(cats => cats.keyvalue === catId);

      selectedCat.map(items => {
        let selectedProd = items.contents;
        selectedProd.filter(prod => prod.id === listedId).map(proditem => {

          let selectedItem = document.createElement('div');
          selectedItem.id = listedId;
          selectedItem.classList.add('chosen-item');

          let hLine = document.createElement('hr');

          let cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');

          let selectedItemImage = document.createElement('div');
          selectedItemImage.classList.add('item-image');
          let itemImage = document.createElement('img');
          itemImage.setAttribute("src", proditem.image);
          itemImage.setAttribute("alt", proditem.name);
          itemImage.setAttribute("width", "70px");
          selectedItemImage.appendChild(itemImage);

          let selectedItemDetails = document.createElement('div');
          selectedItemDetails.classList.add('item-details');
          let selectedName = document.createElement('div');
          selectedName.classList.add('name');
          selectedName.innerHTML = proditem.name;
          let selectedPrice = document.createElement('div');
          selectedPrice.classList.add('price');
          selectedPrice.innerHTML = "Ugx. "+proditem.price+"/=";
          let selectedQty = document.createElement('div');
          selectedQty.classList.add('qty');
          let changeQty = document.createElement('input');
          changeQty.classList.add('c-qty');
          changeQty.setAttribute("type", "number");
          changeQty.setAttribute("min", 1);
          changeQty.setAttribute("value", shopcartitem.qty);
          selectedQty.append(qtyLabel, changeQty);
          selectedItemDetails.append(selectedName, selectedPrice, selectedQty);

          let deleteItem = document.createElement('div');
          deleteItem.classList.add('edit-item');
          let deleteIcon = document.createElement('i');
          deleteIcon.id = listedId;
          deleteIcon.classList.add('fa');
          deleteIcon.classList.add('fa-trash');
          deleteIcon.classList.add('taskicon');
          deleteIcon.setAttribute("aria-hidden", "true");
          deleteIcon.setAttribute("onClick", "deleteItem(this.id)");
          // deleteIcon.addEventListener('click', () => {
          //       selectedItem.parentNode.remove();
          //   })
          deleteItem.appendChild(deleteIcon);

          cartItem.append(selectedItemImage, selectedItemDetails, deleteItem);
          selectedItem.append(hLine, cartItem);
          shoppingList.appendChild(selectedItem);

        })
      })

        // trashIconElement.addEventListener('click', () => {
        //     trashIconElement.parentNode.remove();
        // })
    });
    shoppingList.append(...cartItemsNodeList);
  }
}

presentItems();

function deleteItem(deleteId){
  const cartItems = JSON.parse(localStorage.getItem('shoppingList'));
  let itemToDelete = cartItems.filter(selected => selected.id === deleteId);
  cartItems.splice(cartItems.findIndex(item => item.id === itemToDelete.id),1);
  localStorage.setItem('shoppingList',JSON.stringify(cartItems));
  parentNode.remove();
  presentItems();
  // console.log(cartItems);
}

function addItem(catId, prodId){

  let selectedCat = Products.filter(cats => cats.keyvalue === catId);

  selectedCat.map(items => {
    let selectedProd = items.contents;
    selectedProd.filter(prod => prod.id === prodId).map(proditem => {
     
      let selectedItem = document.createElement('div');
      selectedItem.classList.add('chosen-item');

      let hLine = document.createElement('hr');

      let cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      let selectedItemImage = document.createElement('div');
      selectedItemImage.classList.add('item-image');
      let itemImage = document.createElement('img');
      itemImage.setAttribute("src", proditem.image);
      itemImage.setAttribute("alt", proditem.name);
      itemImage.setAttribute("width", "70px");
      selectedItemImage.appendChild(itemImage);

      let selectedItemDetails = document.createElement('div');
      selectedItemDetails.classList.add('item-details');
      let selectedName = document.createElement('div');
      selectedName.classList.add('name');
      selectedName.innerHTML = proditem.name;
      let selectedPrice = document.createElement('div');
      selectedPrice.classList.add('price');
      selectedPrice.innerHTML = "Ugx. "+proditem.price+"/=";
      let selectedQty = document.createElement('div');
      selectedQty.classList.add('qty');
      let changeQty = document.createElement('input');
      changeQty.classList.add('c-qty');
      changeQty.setAttribute("type", "number");
      changeQty.setAttribute("min", 1);
      changeQty.setAttribute("value", 1);
      selectedQty.append(qtyLabel, changeQty);
      selectedItemDetails.append(selectedName, selectedPrice, selectedQty);

      let deleteItem = document.createElement('div');
      deleteItem.classList.add('edit-item');
      let deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fa');
      deleteIcon.classList.add('fa-trash');
      deleteIcon.classList.add('taskicon');
      deleteIcon.setAttribute("aria-hidden", "true");
      deleteIcon.setAttribute("onClick", "deleteItem(this.id)");
      // deleteIcon.addEventListener('click', () => {
      //       selectedItem.parentNode.remove();
      //   })
      deleteItem.appendChild(deleteIcon);

      cartItem.append(selectedItemImage, selectedItemDetails, deleteItem);
      selectedItem.append(hLine, cartItem);
      shoppingList.appendChild(selectedItem);

      let shoppingItem = {
        "id": proditem.id,
        "qty": 1
      }

      addToLocalStorage(shoppingItem);
    })
  })
}

function clickItem(selectedId)
{
  let catId = selectedId.split("-")[0];
  addItem(catId, selectedId);
}

function addToLocalStorage(item){
  const cartItems = JSON.parse(localStorage.getItem('shoppingList'));
  if(cartItems) {
      cartItems.unshift(item);
      localStorage.setItem('shoppingList',JSON.stringify(cartItems));
  }else {
      localStorage.setItem('shoppingList',JSON.stringify([item]))
  }
}
