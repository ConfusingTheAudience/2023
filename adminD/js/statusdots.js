export const statusInfo = document.querySelectorAll(".status-info");

statusInfo.forEach((status) => {
  status.addEventListener("click", (e) => {
    const statusColor = e.target.classList;

    if (statusColor.contains("status-infoR")) {
      status.classList.remove("status-infoR");
    } else if (statusColor.contains("status-infoY")) {
      status.classList.remove("status-infoY");
      status.classList.add("status-infoR");
    } else {
      status.classList.add("status-infoY");
    }
  });
});
