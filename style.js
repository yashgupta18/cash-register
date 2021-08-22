var billAmount = document.querySelector(".bill-amount");
var btnNext = document.querySelector(".btn-next");
var cashGiven = document.querySelector(".cash-given");
var btnCheck = document.querySelector(".btn-check");
var secondaryDetails = document.querySelector(".secondary-details");
const notesTable = document.querySelector(".notes-table");
const primaryErrorMsg = document.querySelector(".primary-error");
const secondaryErrorMsg = document.querySelector(".secondary-error");

// notes class
const notesOfTwoK1 = document.querySelector(".notesOfTwoK");
const notesOfFiveH1 = document.querySelector(".notesOfFiveH");
const notesOfHundred1 = document.querySelector(".notesOfHundred");
const notesOfTwenty1 = document.querySelector(".notesOfTwenty");
const notesOfTen1 = document.querySelector(".notesOfTen");
const notesOfFive1 = document.querySelector(".notesOfFive");
const notesOfOne1 = document.querySelector(".notesOfOne");

btnNext.addEventListener("click", function () {
  const billAmountValue = billAmount.value;

  if (billAmountValue.length == 0 || billAmountValue < 1) {
    primaryErrorMsg.style.display = "block";
  } else {
    primaryErrorMsg.style.display = "none";
    btnNext.style.display = "none";
    secondaryDetails.classList.add("show-secondary-details");
  }
});

btnCheck.addEventListener("click", function () {
  const billAmountValue = parseInt(billAmount.value);
  const cashGivenValue = parseInt(cashGiven.value);
  if (billAmountValue > cashGivenValue) {
    secondaryErrorMsg.style.display = "block";
    notesTable.classList.add("notes-table");
  } else {
    notesOfTwoK1.innerText = "";
    notesOfFiveH1.innerText = "";
    notesOfHundred1.innerText = "";
    notesOfTwenty1.innerText = "";
    notesOfTen1.innerText = "";
    notesOfFive1.innerText = "";
    notesOfOne1.innerText = "";

    secondaryErrorMsg.style.display = "none";
    notesTable.classList.remove("notes-table");
    var totalCashReturn = cashGivenValue - billAmountValue;
    if (totalCashReturn >= 2000) {
      const notesOfTwoK = Math.floor(totalCashReturn / 2000);
      notesOfTwoK1.innerText = notesOfTwoK;
      totalCashReturn = totalCashReturn % 2000;
    }
    if (totalCashReturn >= 500) {
      const notesOfFiveH = Math.floor(totalCashReturn / 500);
      notesOfFiveH1.innerText = notesOfFiveH;
      totalCashReturn = totalCashReturn % 500;
    }
    if (totalCashReturn >= 100) {
      const notesOfHundred = Math.floor(totalCashReturn / 100);
      notesOfHundred1.innerText = notesOfHundred;
      totalCashReturn = totalCashReturn % 100;
    }
    if (totalCashReturn >= 20) {
      const notesOfTwenty = Math.floor(totalCashReturn / 20);
      notesOfTwenty1.innerText = notesOfTwenty;
      totalCashReturn = totalCashReturn % 20;
    }
    if (totalCashReturn >= 10) {
      const notesOfTen = Math.floor(totalCashReturn / 10);
      notesOfTen1.innerText = notesOfTen;
      totalCashReturn = totalCashReturn % 10;
    }
    if (totalCashReturn >= 5) {
      const notesOfFive = Math.floor(totalCashReturn / 5);
      notesOfFive1.innerText = notesOfFive;
      totalCashReturn = totalCashReturn % 5;
    }
    if (totalCashReturn >= 1) {
      const notesOfOne = Math.floor(totalCashReturn / 1);
      notesOfOne1.innerText = notesOfOne;
      totalCashReturn = totalCashReturn % 1;
    }
  }
});
