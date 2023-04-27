export const daysContainer = document.querySelector(".downPanel-days");
export const date = document.querySelector(".upPanel-date");
export const prev = document.querySelector(".upPanel-leftArrow");
export const next = document.querySelector(".upPanel-rightArrow");

// REPEATED LINE TO GET CONTAINER
export const grid = document.querySelector(".container");

export let today = new Date();
export let month = today.getMonth();
export let year = today.getFullYear();

export const monthsArray = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function showCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();

  const nextDays = 7 - lastDay.getDay() - 1;
  date.innerHTML = `${monthsArray[month]} ${year}`;

  // DAYS ADD
  let days = "";

  // 26,27,28...
  for (let x = day; x > 0; x--) {
    days += `<p class="dayInactive day">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      days += `<p class="dayCurrent day" >${i}</p>`;
    } else {
      days += `<p class="day">${i}</p>`;
    }
  }

  // 1,2,3...
  for (let j = 1; j <= nextDays; j++) {
    days += `<p class="dayInactive day">${j}</p>`;
  }

  daysContainer.innerHTML = days;
}
showCalendar();

prev.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  showCalendar();
  checkCalendarDays();
});

next.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  showCalendar();
  checkCalendarDays();
});

// ADD NEW EVENT

export const addEventBtn = document.querySelector(".notification-addNew");
export const calendarNewPanel = document.querySelector(".calendar-addNewPanel");

addEventBtn.addEventListener("click", () => {
  calendarNewPanel.classList.add("show");
  grid.classList.add("untouch");
  nameInput.value = "";
  timeInput.value = "";
});

export const exitEventBtn = document.querySelector(".calendar-exit");
export const addToListEventBtn = document.querySelector(".calendar-btn");
export const errorMessages = document.querySelector(".calendar-messages");

export const eventList = document.querySelector(".notification-list");

exitEventBtn.addEventListener("click", () => {
  calendarNewPanel.classList.remove("show");
  grid.classList.remove("untouch");
  errorMessages.classList.remove("show");

  nameInput.value = "";
  timeInput.value = "";
});

export const nameInput = document.querySelector("#name");
export const timeInput = document.querySelector("#time");

addToListEventBtn.addEventListener("click", checkEvent);

export function checkEvent() {
  const nameInputValue = nameInput.value;
  const timeInputValue = timeInput.value;

  let lettersAndNumbers = /^[A-Za-z0-9 ]*$/;

  console.log(nameInputValue.match(lettersAndNumbers));

  if (nameInputValue === "" && timeInputValue === "") {
    errorMessages.textContent =
      "Error. You cannot pass blank Event Name and Event Time";
    errorMessages.classList.add("show");
  } else if (nameInputValue === "" && timeInputValue !== "") {
    errorMessages.textContent = "Error. You cannot pass blank Event Name";
    errorMessages.classList.add("show");
  } else if (nameInputValue !== "" && timeInputValue === "") {
    errorMessages.textContent = "Error. You cannot pass blank Event Time";
    errorMessages.classList.add("show");
  } else if (
    nameInputValue !== "" &&
    timeInputValue !== "" &&
    !nameInputValue.match(lettersAndNumbers)
  ) {
    errorMessages.textContent =
      "Error, You need to pass letters and numbers only in Event Name";
    errorMessages.classList.add("show");
  } else if (
    nameInputValue !== "" &&
    timeInputValue !== "" &&
    !timeInputValue.match(lettersAndNumbers)
  ) {
    errorMessages.textContent =
      "Error, You need to pass letters and numbers only in Event Time";
    errorMessages.classList.add("show");
  } else {
    errorMessages.classList.remove("show");

    const eventDiv = document.createElement("div");
    eventDiv.classList.add("meet");

    const eventTitle = document.createElement("p");
    eventTitle.classList.add("meet-title");
    eventTitle.textContent = nameInputValue;

    const eventDate = document.createElement("p");
    eventDate.classList.add("meet-date");
    eventDate.textContent = timeInputValue;

    eventDiv.append(eventTitle, eventDate);
    eventList.prepend(eventDiv);

    calendarNewPanel.classList.remove("show");
    grid.classList.remove("untouch");
  }
  checkEventInfo();
}

// CHECK EVENT FROM EVENT LIST

export function checkEventInfo() {
  const allEvents = document.querySelectorAll(".meet");

  allEvents.forEach((singleEvent) => {
    // CHECK IF SCROLL IS CLICKED -> REMOVE CURRENT ELEMENT
    singleEvent.addEventListener("mousedown", (e) => {
      if (e.button === 1) {
        singleEvent.remove();
      }
    });

    singleEvent.addEventListener("click", (e) => {
      const eventNameV = e.target.children[0];
      const eventDateV = e.target.children[1];

      calendarNewPanel.classList.add("show");
      grid.classList.add("untouch");

      // title and date putted on event

      nameInput.value = eventNameV.textContent;
      timeInput.value = eventDateV.textContent;
    });
  });
}
checkEventInfo();

// CHECK EVENT TO ADD FROM CALENDAR

export function checkCalendarDays() {
  const allEventsOnCalendar = document.querySelectorAll(".day");

  const allEventsOnCalendarArray = [...allEventsOnCalendar];
  const onlyAvailableCalendarDaysArray = [];

  allEventsOnCalendarArray.filter((calendarDay) =>
    calendarDay.classList.contains("dayInactive")
      ? // THIS IS ONLY PLACEHOLDER - ? DO NOTHING
        allEventsOnCalendarArray.push(calendarDay)
      : onlyAvailableCalendarDaysArray.push(calendarDay)
  );

  onlyAvailableCalendarDaysArray.forEach((clickedDay) => {
    clickedDay.addEventListener("click", (e) => {
      nameInput.value = "";
      timeInput.value = "";
      const checkCurrentDay = e.target.textContent;
      const checkCurrentDate =
        e.target.offsetParent.children[0].children[0].children[1].textContent;

      calendarNewPanel.classList.add("show");
      grid.classList.add("untouch");
      timeInput.value = `${checkCurrentDay} ${checkCurrentDate}`;
    });
  });
}
checkCalendarDays();
