export const orderLists = [
  {
    id: 2541,
    clientName: "Kevin Sun",
    clientAddress: "Norwin 15 Street 4/6",
    clientPhone: 405302,
    date: "04.02.21",
    productsN: 2,
    products: ["E", "Pako"],
    cost: 204,
    place: "Shop",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2542,
    clientName: "Ashley Ung",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "24.02.20",
    productsN: 1,
    products: ["Q"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2543,
    clientName: "A",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "18.05.21",
    productsN: 5,
    products: ["Z", "A", "K", "mas", "C"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2544,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "24.07.22",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2545,
    clientName: "g",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "10.05.20",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2546,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "22.02.22",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2547,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "05.11.21",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2548,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "04.01.20",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 2549,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "20.03.19",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Done",
  },
  {
    id: 1521,
    clientName: "nnna",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "25.01.21",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Pending",
  },
  {
    id: 848,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "11.12.22",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Canceled",
  },
  {
    id: 1004,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "09.03.21",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Pending",
  },
  {
    id: 921,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "16.06.19",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Canceled",
  },
  {
    id: 2190,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "28.09.20",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Pending",
  },
  {
    id: 421,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "11.01.19",
    productsN: 1,
    products: ["OP"],
    cost: 68,
    place: "Online",
    payment: "Online",
    status: "Canceled",
  },
  {
    id: 578,
    clientName: "",
    clientAddress: "NO",
    clientPhone: "NO",
    date: "18.07.17",
    productsN: 2,
    products: ["YY", "OU"],
    cost: 22,
    place: "Online",
    payment: "Online",
    status: "Canceled",
  },
  {
    id: 197,
    clientName: "Norb Ansa",
    clientAddress: "Uasntoasna",
    clientPhone: "NO",
    date: "11.01.18",
    productsN: 1,
    products: ["XX"],
    cost: 20,
    place: "Shop",
    payment: "Online",
    status: "Canceled",
  },
];

// ORDER DISPLAY

export const orderDetail = document.querySelector(".order-detail");
export const orderDetailBtn = document.querySelector(".order-detailBack");
export const orderTableRow = document.querySelector(".order-tableRow");

orderLists.forEach((order) => {
  loadOrders(order);
});

export function loadOrders(order) {
  const orderItem = document.createElement("div");
  orderItem.classList.add("order-tableRow-grid");

  orderItem.innerHTML = `
    <p id="${order.id}">${order.id}</p>
    <p class="media-displayer" id="${order.id}">${order.productsN}</p>
    <p id="${order.id}">${order.cost}</p>
    <p id="${order.id}">${order.date}</p>
    <p class="media-displayer" id="${order.id}">${order.place}</p>
    <p class="media-displayer" id="${order.id}">${order.payment}</p>
    `;

  if (order.status === "Canceled") {
    orderItem.classList.add("order-tableRow-gridRed");
  } else if (order.status === "Pending") {
    orderItem.classList.add("order-tableRow-gridYellow");
  }

  orderTableRow.append(orderItem);
}

export const viewOrderResults = document.querySelectorAll(
  ".order-tableRow-grid"
);

viewOrderResults.forEach((orderResult) => {
  orderResult.addEventListener("click", (e) => {
    for (let i = 0; i < orderLists.length; i++) {
      const currentOrder = orderLists[i];
      if (e.target.id == currentOrder.id) {
        orderInformation(currentOrder);
      }
    }
  });
});

// left for deleting scroll on smaller window size
const leftBar = document.querySelector(".leftBar");
const orderTable = document.querySelector(".order-table");

export function orderInformation(currentOrder) {
  leftBar.style.display = "none";
  orderTable.style.display = "none";
  orderDetail.classList.remove("order-detail-hide");

  const clientOrderId = document.querySelector(".clientOrderId");
  const clientOrderName = document.querySelector(".clientOrderName");
  const clientOrderAddress = document.querySelector(".clientOrderAddress");
  const clientOrderPhone = document.querySelector(".clientOrderPhone");
  const clientOrderDate = document.querySelector(".clientOrderDate");
  const clientOrderProducts = document.querySelector(".clientOrderProducts");
  const clientOrderCost = document.querySelector(".clientOrderCost");
  const clientOrderPlace = document.querySelector(".clientOrderPlace");
  const clientOrderPayment = document.querySelector(".clientOrderPayment");
  const clientOrderStatus = document.querySelector(".clientOrderStatus");

  clientOrderId.textContent = currentOrder.id;
  clientOrderName.textContent = currentOrder.clientName;
  clientOrderAddress.textContent = currentOrder.clientAddress;
  clientOrderPhone.textContent = currentOrder.clientPhone;
  clientOrderDate.textContent = currentOrder.date;
  clientOrderProducts.textContent = currentOrder.products;
  clientOrderCost.textContent = currentOrder.cost;
  clientOrderPlace.textContent = currentOrder.place;
  clientOrderPayment.textContent = currentOrder.payment;
  clientOrderStatus.textContent = currentOrder.status;

  // CHECK FOR STATUS TO DISPLAY PROPER COLOR OF ORDER

  const orderImg = document.querySelector(".order-container .order-info svg");
  const orderTitle = document.querySelector(".order-container .order-info h2");

  if (currentOrder.status === "Done") {
    orderImg.style.fill = "green";
    orderTitle.style.color = "green";
  } else if (currentOrder.status === "Pending") {
    orderImg.style.fill = "black";
    orderTitle.style.color = "black";
  } else {
    orderImg.style.fill = "red";
    orderTitle.style.color = "red";
  }
}

orderDetailBtn.addEventListener("click", () => {
  orderDetail.classList.add("order-detail-hide");
  leftBar.style.display = "block";
  orderTable.style.display = "block";
});

export const orderCounter = document.querySelector(".order-count");
orderCounter.textContent = `Total orders: ${orderLists.length}`;
