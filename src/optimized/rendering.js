const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <span class="subtitle">Product</span>
    <h3 class="product-title">${product.title}</h3>
    <p class="price_container">Price: <span class="price">$${parseFloat(product.price).toFixed(2)}</span></p>
  `;
  const prodDeleteButtonEl = document.createElement('button');
  prodDeleteButtonEl.innerHTML = '<i class="fa fa-trash-o"></i>';
  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.prepend(prodDeleteButtonEl);
  return newListEl;
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement('beforeend', newProductEl);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}

export function addFormListItem() {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
  <form id="new-product">
    <div class="form-control">
      <input type="text" id="title" placeholder="Title" minlength="4" />
    </div>
    <div class="form-control">
      <input type="number" min="0" step="0.01" id="price" placeholder="Price" />
    </div>
    <button type="submit"> + Add</button>
  </form>
  `;
  productListEl.appendChild(newListEl);
}
