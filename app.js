const URL = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices`;

let input1 = document.querySelector("#input1");
let output = document.querySelector("#input2");
let from = document.querySelector("#three");
let to = document.querySelector("#four");
let convert = document.querySelector(".convert button");
let arrow = document.querySelector(".arrow");
let firstImg = document.querySelector(".image-one");
let secImg = document.querySelector(".image-two");
let inputFrom = document.querySelector(".inputBefore");
let inputTo = document.querySelector(".inputAfter");

const countries = countryList;

if (from) {
  for (country in countries) {
    const newOption = document.createElement(`option`);
    newOption.setAttribute(`class`, `option`);
    newOption.innerHTML = country;
    from.appendChild(newOption);

    if (newOption.innerText == `USD`) {
      newOption.setAttribute("selected", "selected");
      firstImg.src = `https://flagsapi.com/${
        countries[newOption.innerText]
      }/shiny/64.png`;
      inputFrom.innerText = newOption.innerText;
    }
  }

  from.addEventListener(`change`, (event) => {
    if (from) {
      const options = from.childNodes;

      options.forEach((option) => {
        if (option.nodeType === 1) {
          const value = option.getAttribute(`selected`);

          if (value === `selected`) {
            option.removeAttribute(`selected`);
          }
        }
      });

      options.forEach((option) => {
        if (option.nodeType === 1) {
          if (option.innerText == event.target.value) {
            option.setAttribute("selected", "selected");
            firstImg.src = `https://flagsapi.com/${
              countries[option.innerText]
            }/shiny/64.png`;
            inputFrom.innerText = option.innerText;
          }
        }
      });
    }

    firstImg.src = `https://flagsapi.com/${
      countries[event.target.value]
    }/shiny/64.png`;
    inputFrom.innerText = event.target.value;
    output.value = ``;
  });
}
if (to) {
  for (country in countries) {
    const newOption = document.createElement(`option`);
    newOption.innerHTML = country;
    to.appendChild(newOption);

    if (newOption.innerHTML === `INR`) {
      newOption.setAttribute("selected", "selected");
      secImg.src = `https://flagsapi.com/${
        countries[newOption.innerHTML]
      }/shiny/64.png`;
      inputTo.innerText = `${newOption.innerText}`;
    }
  }
  to.addEventListener(`change`, (event) => {
    if (to) {
      const options = to.childNodes;

      options.forEach((option) => {
        if (option.nodeType === 1) {
          const value = option.getAttribute(`selected`);

          if (value === `selected`) {
            option.removeAttribute(`selected`);
          }
        }
      });

      options.forEach((option) => {
        if (option.nodeType === 1) {
          if (option.innerText == event.target.value) {
            option.setAttribute("selected", "selected");
            secImg.src = `https://flagsapi.com/${
              countries[option.innerText]
            }/shiny/64.png`;
            inputTo.innerText = option.innerText;
          }
        }
      });
    }

    secImg.src = `https://flagsapi.com/${
      countries[event.target.value]
    }/shiny/64.png`;
    inputTo.innerText = event.target.value;
    output.value = ``;
  });
}

convert.addEventListener(`click`, async (event) => {
  event.preventDefault();
  if (input1.value == `` || input1.value == 0) {
    input1.value = 1;
  }
  output.value = ``;

  fromVal = from.value;
  toVal = to.value;
  setTimeout(() => {
    if (crrVal[fromVal] !== crrVal[toVal]) {
      let exchange = input1.value * (crrVal[toVal] / crrVal[fromVal]);
      function roundDecimal(number, precision) {
        const multiplier = Math.pow(10, precision);
        return Math.round(number * multiplier) / multiplier;
      }
      output.value = roundDecimal(exchange, 3);
    } else {
      output.value = input1.value;
    }
  }, 300);
});

arrow.addEventListener(`click`, async (event) => {
  const firstImgVal = firstImg.src;
  const secImgVal = secImg.src;
  const fromVal = from.innerHTML;
  const toVal = to.innerHTML;

  const inputFromVal = inputFrom.innerText;
  const inputToVal = inputTo.innerText;

  if (firstImgVal !== secImgVal || fromVal !== toVal) {
    firstImg.src = secImgVal;
    secImg.src = firstImgVal;
    from.innerHTML = toVal;
    to.innerHTML = fromVal;
    inputFrom.innerText = inputToVal;
    inputTo.innerText = inputFromVal;
  }
  output.value = ``;
});

input1.addEventListener(`input`, async (event) => {
  output.value = ``;
});
