const stepsCircle = document.querySelectorAll(".steps-circle");
const btns = document.querySelectorAll(".btns");

let elementWidthPercent = 20;
let currentStep = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    const progressLine = document.querySelector(".progress-line");
    const currentClickedBtn = e.target.innerText;

    if (currentClickedBtn === "NEXT") {

      currentStep++;
      checkForStep(currentStep);

      elementWidthPercent += 30;
      elementWidthPercent >= 100 ? progressLine.style.width = 100 + "%" : progressLine.style.width = `${elementWidthPercent}%`;

      //  reset value for prev (to make it max 110)
      //  to make it work properly it needs to be 110 instead of 100 because of 110-30 diff 100-30
      if(elementWidthPercent > 100){
        elementWidthPercent = 110;
      }

    } else {

      currentStep--;
      checkForStep(currentStep);

      elementWidthPercent -= 30;
      elementWidthPercent <= 20 ? progressLine.style.width = 20 + "%" : progressLine.style.width = `${elementWidthPercent}%`;

      // reset value for next (to make it not less than 20)
      if(elementWidthPercent < 20){
        elementWidthPercent = 20;
      }   
    }
  });
});

function checkForStep(step){
    console.log(step);
    if(step === 0){
        prevBtn = document.querySelector(".btn-prev");
        prevBtn.style.opacity = 0.2;
        prevBtn.style.userSelect = "none";
        prevBtn.style.pointerEvents = "none";
    } else if(step === 3){
        nextBtn = document.querySelector(".btn-next");
        nextBtn.style.opacity = 0.2;
        nextBtn.style.userSelect = "none";
        nextBtn.style.pointerEvents = "none";
    } else{
        prevBtn = document.querySelector(".btn-prev");
        nextBtn = document.querySelector(".btn-next");
        prevBtn.style.opacity =1;
        prevBtn.style.pointerEvents = "auto";
        nextBtn.style.opacity = 1;
        nextBtn.style.pointerEvents = "auto";
    }

    // make circles active and inactive

    stepsCircle.forEach(circle =>{
        circle.classList.remove("active");
    })

    for(step; step >= 0; step--){
      stepsCircle[step].classList.add("active");
    }
}

/* step 0 - 20%  */
/* step 1 - 50% */
/* step 2 - 80% */
/* step 3 - 100% (110) - COMPLETED */
