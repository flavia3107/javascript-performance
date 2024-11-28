import { addFormListItem } from './rendering';

function addProduct(event) {
  event.preventDefault();
  import('./product-management.js').then(mod => {
    mod.addProduct(event);
  })
}

function deleteProduct(productId) {
  import('./product-management.js').then(mod => {
    mod.deleteProduct(productId);
  })
}

function initProducts() {
  addFormListItem();
}

initProducts();

const addProductForm = document.getElementById('new-product');
addProductForm.addEventListener('submit', addProduct);
