export const messagesContainer = document.querySelector(".reports-displayer");
export const messagesOption = document.querySelectorAll(".reports-option");
export const agreedReport = document.querySelector(".reports-agreedReport");

const showMessageTime = 500;
const showMessageTime2 = 1000;

// func to delete and check messages
export function checkMessages() {
  if (messagesContainer.children.length > 3) {
    messagesContainer.children[0].remove();
  }
}
setInterval(checkMessages, 1000);

messagesOption.forEach((option) => {
  option.addEventListener("click", (e) => {
    const optionPicked = e.target.dataset.option;

    checkPick(optionPicked);
  });
});

export function checkPick(optionPicked) {
  if (optionPicked === "1") {
    const humanAnswer = document.createElement("div");
    humanAnswer.classList.add("human-message");
    humanAnswer.textContent = `I need to get help`;

    messagesContainer.append(humanAnswer);
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "2") {
    makingHumanAnswer("Home");
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "3") {
    makingHumanAnswer("Orders");
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "4") {
    makingHumanAnswer("Analytics");
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "5") {
    makingHumanAnswer("Products");
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "6") {
    makingHumanAnswer("Calendar");
    setTimeout(function () {
      makingBotAnswerOptionX(optionPicked);
    }, showMessageTime);
  } else if (optionPicked === "7") {
    const humanAnswer = document.createElement("div");
    humanAnswer.classList.add("human-message");
    humanAnswer.textContent = "I want to report a bug";

    messagesContainer.append(humanAnswer);
    setTimeout(makingBotAnswerOption7, showMessageTime);
    agreedReport.classList.add("show");
  }
}

export function makingHumanAnswer(questionAbout) {
  const humanAnswer = document.createElement("div");
  humanAnswer.classList.add("human-message");
  humanAnswer.textContent = `I want to know what is ${questionAbout} section about`;

  messagesContainer.append(humanAnswer);
}

// 1-6
export function makingBotAnswerOptionX(optionPicked) {
  const botAnswer = document.createElement("div");
  botAnswer.classList.add("bot-message");
  botAnswer.textContent = `...`;
  messagesContainer.append(botAnswer);
  switch (optionPicked) {
    case "1":
      setTimeout(makingBotAnswerOption1, showMessageTime2);
      function makingBotAnswerOption1() {
        botAnswer.textContent = `On the right side there's panel with available options for you. Click on interesting topic and I'm gonna help you with it`;
      }
      break;
    case "2":
      setTimeout(makingBotAnswerOption2, showMessageTime2);
      function makingBotAnswerOption2() {
        botAnswer.textContent = `Home is the place where u can mainly see your profile and most important parts of business such as profit, orders done, planned meetings`;
      }
      break;
    case "3":
      setTimeout(makingBotAnswerOption3, showMessageTime2);
      function makingBotAnswerOption3() {
        botAnswer.textContent = `Orders is the place mostly for Employers where they can see and manage details about single customer order`;
      }
      break;
    case "4":
      setTimeout(makingBotAnswerOption4, showMessageTime2);
      function makingBotAnswerOption4() {
        botAnswer.textContent = `Analaytics section provides advanced tools for tracking business progress`;
      }
      break;
    case "5":
      setTimeout(makingBotAnswerOption5, showMessageTime2);
      function makingBotAnswerOption5() {
        botAnswer.textContent = `Products is the place mostly for Employers where they can see all available products, they're cost, prepared time and more`;
      }
      break;
    case "6":
      setTimeout(makingBotAnswerOption6, showMessageTime2);
      function makingBotAnswerOption6() {
        botAnswer.textContent = `Calendar is the place to add, control and manage meetings`;
      }
      break;
  }
}

export function makingBotAnswerOption7() {
  const botAnswer = document.createElement("div");
  botAnswer.classList.add("bot-message");
  botAnswer.textContent = `...`;
  setTimeout(makingBotAnswerOption, showMessageTime2);
  messagesContainer.append(botAnswer);

  function makingBotAnswerOption() {
    botAnswer.textContent = `On the right side you can confirm your report and we're gonna contact with you for details to fix the problem`;
  }
}

// sencd report

export const reportAgree = document.querySelector(".reports-agree");
export const reportDisagree = document.querySelector(".reports-disagree");

export let reportID = 1230;

reportAgree.addEventListener("click", () => {
  reportID++;
  agreedReport.classList.remove("show");
  const botAnswer = document.createElement("div");
  botAnswer.classList.add("bot-message");
  botAnswer.textContent = `Report sended. Your ID is ${reportID}. Check your mail`;
  messagesContainer.append(botAnswer);
});

reportDisagree.addEventListener("click", () => {
  agreedReport.classList.remove("show");
  const botAnswer = document.createElement("div");
  botAnswer.classList.add("bot-message");
  botAnswer.textContent = `You canceled report`;
  messagesContainer.append(botAnswer);
});