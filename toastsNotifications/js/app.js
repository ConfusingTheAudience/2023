const toastBox = document.querySelector(".toastBox");

const successMsg = `<i class="fa-solid fa-circle-check"></i>This is success message`;
const errorMsg = `<i class="fa-solid fa-triangle-exclamation"></i>This is error message`;
const infoMsg = `<i class="fa-solid fa-circle-info"></i>This is info message`;
const warningMsg = `<i class="fa-solid fa-circle-exclamation"></i>This is warning message`;

function showToast(message) {
  // create element and push it to html
  const newToast = document.createElement("div");
  newToast.classList.add("toastBox-notification");
  newToast.innerHTML = message;
  toastBox.appendChild(newToast);

  //   check for time color
  if (message.includes("info")) {
    newToast.classList.add("notification-info");
  }
  if (message.includes("error")) {
    newToast.classList.add("notification-error");
  }
  if (message.includes("warning")) {
    newToast.classList.add("notification-warning");
  }

  setTimeout(() => {
    newToast.remove();
  }, 5000);

  //   allow max 4 notification at once
  const toastBoxMessagesCount = toastBox.childNodes.length;
  if (toastBoxMessagesCount > 4) {
    newToast.remove();
  }
}
