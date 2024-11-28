const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
  const prodDeleteButtonEl = document.createElement('button');
  prodDeleteButtonEl.textContent = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodDeleteButtonEl);

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
      <label for="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div class="form-control">
      <label for="price">Price</label>
      <input type="number" min="0" step="0.01" id="price" />
    </div>
    <button type="submit">ADD PRODUCT</button>
  </form>
  `;
  productListEl.appendChild(newListEl);
}
