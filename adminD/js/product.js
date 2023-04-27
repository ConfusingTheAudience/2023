export const productsList = [
  {
    id: 1,
    title: "Sushi",
    productCost: 24,
    productTime: 15,
    prep: 15,
    cook: 20,
    ingredients: [
      "300g sushi rice",
      "100ml rice wine vinegar",
      "2 tbsp golden caster sugar",
      "25g bag nori (seaweed) sheets",
      "avocado",
    ],
  },
  {
    id: 2,
    title: "Kyo",
    productCost: 14,
    productTime: 25,
    prep: 30,
    cook: 10,
    ingredients: ["av", "250g", "10"],
  },
  {
    id: 3,
    title: "1",
    productCost: 31,
    productTime: 10,
    prep: 45,
    cook: 0,
    ingredients: ["300g", "250g", "y"],
  },
  {
    id: 4,
    title: "2",
    productCost: 31,
    productTime: 26,
    prep: 25,
    cook: 20,
    ingredients: ["3sacsac", "2sfsf", "10"],
  },
  {
    id: 5,
    title: "3",
    productCost: 31,
    productTime: 26,
    prep: 5,
    cook: 20,
    ingredients: ["10000"],
  },
  {
    id: 6,
    title: "4",
    productCost: 31,
    productTime: 26,
    prep: 35,
    cook: 70,
    ingredients: ["300g"],
  },
  {
    id: 7,
    title: "5",
    productCost: 18,
    productTime: 29,
    prep: 45,
    cook: 10,
    ingredients: ["250g", "10"],
  },
  {
    id: 8,
    title: "6",
    productCost: 52,
    productTime: 50,
    prep: 10,
    cook: 0,
    ingredients: ["zz", "dd", "cc"],
  },
  {
    id: 9,
    title: "7",
    productCost: 12,
    productTime: 18,
    prep: 10,
    cook: 10,
    ingredients: ["300g"],
  },
  {
    id: 10,
    title: "8",
    productCost: 10,
    productTime: 5,
    prep: 35,
    cook: 20,
    ingredients: ["10"],
  },
  {
    id: 11,
    title: "9",
    productCost: 32,
    productTime: 16,
    prep: 20,
    cook: 10,
    ingredients: ["300g", "250g", "10", "300g", "250g", "10"],
  },
  {
    id: 12,
    title: "10",
    productCost: 42,
    productTime: 35,
    prep: 15,
    cook: 0,
    ingredients: ["300g", "10"],
  },
];

// PRODUCT DETAIL DISPLAY

export const productCard = document.querySelector(".product-card");
export const productDetail = document.querySelector(".product-detail");
export const productDetailBackBtn = document.querySelector(
  ".product-detailBack"
);
export const prepTime = document.querySelector(".product-prepTime");
export const cookTime = document.querySelector(".product-cookTime");
export const productInfoIngredients = document.querySelector(
  ".product-info-ingredients"
);

// left for deleting scroll on smaller window size
export const leftBar = document.querySelector(".leftBar");

productsList.forEach((product) => {
  loadProducts(product);
});

export function loadProducts(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.innerHTML = `
    <h3>${product.title}</h3>
    <p class="product-cost">${product.productCost}$</p>
    <p class="product-time">${product.productTime}min</p>
    <button class="view-detail" id="${product.id}">View Detail</button>
    `;

  productCard.append(productItem);
}

export const buttons = document.querySelectorAll(".view-detail");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    leftBar.style.display = "none";
    productCard.style.display = "none";
    for (let i = 0; i < productsList.length; i++) {
      const currentProduct = productsList[i];
      if (e.target.id == currentProduct.id) {
        const singleDiv = document.createElement("div");
        productInformation(singleDiv, currentProduct);
        backBtn(singleDiv);
      }
    }
  });
});

export function productInformation(singleDiv, currentProduct) {
  productDetail.classList.remove("product-detail-hide");
  prepTime.textContent = currentProduct.prep;
  cookTime.textContent = currentProduct.cook;

  let allIngredients = currentProduct.ingredients;
  let howMuchIngredients = currentProduct.ingredients.length;

  for (let j = 0; j < howMuchIngredients; j++) {
    const listIng = document.createElement("p");
    listIng.textContent = allIngredients[j];
    singleDiv.append(listIng);
  }

  productInfoIngredients.append(singleDiv);
}

export function backBtn(singleDiv) {
  productDetailBackBtn.addEventListener("click", () => {
    leftBar.style.display = "block";
    productCard.style.display = "flex";
    productDetail.classList.add("product-detail-hide");
    singleDiv.remove();
  });
}
