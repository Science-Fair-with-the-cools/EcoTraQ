// Get textbox for summary
const summaryText = document.getElementById("resultBox");

// Get the div so we can make the buttons
const summaryBtns = document.getElementById("navBtns");

// barGraph holders
const barGraphA = document.getElementById("barGraphA");

// worldsText
const worldsText = document.getElementById("worldsText");

// Aquire all of the questions
const numInput = document.getElementById("predictionInp");

const question1 = document.getElementById("transportSelect");
const question2 = document.getElementById("commuteTimeInp");
const question3 = document.getElementById("flightsSelect");

const question4 = document.getElementById("housingSelect");
const question5 = document.getElementById("heatingSelect");
const question5b = document.getElementById("occupantsInp");
const question6DryerBox = document.getElementById("dryerBox");
const question6DishwasherBox = document.getElementById("dishwashBox");
const question6FridgeBox = document.getElementById("fridgeBox");
const question6StoveElecBox = document.getElementById("stoveElecBox");
const question6StoveGasBox = document.getElementById("stoveGasBox");
const question6SmallAppsBox = document.getElementById("smallAppliancesBox");

const question7 = document.getElementById("dietSelect");
const question8 = document.getElementById("showerInp");
const question9RecycleBox = document.getElementById("recyclingBox");
const question9CompostBox = document.getElementById("compostBox");

const question10 = document.getElementById("clothesSelect");
const question11NumOfPhones = document.getElementById("numPhones");
const question11NumOfLaptops = document.getElementById("numLaptops");
const question11NumOfDesktops = document.getElementById("numDesktops");
const question11NumOfTVs = document.getElementById("numTV");

//The big questions array (Only for select and boxes)
const questionsArr = {
  transportation: {
    // Q.1
    "Car": 0.08248044,
    "EV": 0.004023436,
    "Hybrid": 0.04626952,
    "Bus": 0.03319335,
    "Bike": 0,
    "Walk": 0,
    // Q.3
    "multipleFlights": 1.008,
    "oneFlight": 0.336,
    "noFlights": 0,
  },
  housing: {
    // Q.4
    "townHome": 5.96,
    "singleHome": 38.22,
    "apartment": 10.07,
    "mobileHome": 1.09,
    // Q.5
    "GasHeat": 3.265,
    "ElecHeat": 3.311,
    // Q.6 (Checkbox)
    "dryer": 0.66,
    "dishwasher": 0.04,
    "refrigerator": 0.5,
    "stoveElec": 0.87,
    "stoveGas": 0.54,
    "smallApps": 0.05417,
  },
  habits: {
    // Q.7
    "vegan": 1.06,
    "vegetarian": 1.39,
    "omnivore": 3.3,
    "halal": 3.2315261,
    "pesc": 1.43,
    "noBeef": 1.9,
    // Q.9
    "recycle": -0.10,
    "compost": -0.05,
  },
  lifestyle: {
    // Q.10
    "oftenClothes": 1.2,
    "monthClothes": 0.6,
    "fewMonthClothes": 0.275,
    "noClothes": 0.1,
  }
}


// Function to calculate the different emissions per section
function calculateSectionEmissions(sectionName) {
  let sectionTotal = 0;
  let sectionArray = questionsArr[sectionName];
  let selectedTravelTime = 0;
  let selectedHousing = 0;

  for (var key in sectionArray) {

    if (key == question1.value) {
      selectedTravelTime += sectionArray[key];
    }

    if (key == question4.value) {
      selectedHousing += sectionArray[key];
    }

    if (key == question3.value || key == question5.value || (key == question6DryerBox.value && question6DryerBox.checked) ||
      (key == question6DishwasherBox.value && question6DishwasherBox.checked) || (key == question6FridgeBox.value && question6FridgeBox.checked) ||
      (key == question6StoveElecBox.value && question6StoveElecBox.checked) || (key == question6StoveGasBox.value && question6StoveGasBox.checked) ||
      (key == question6SmallAppsBox.value && question6SmallAppsBox.checked) || key == question7.value || (key == question9RecycleBox.value && question9RecycleBox.checked) ||
      (key == question9CompostBox.value && question9CompostBox.checked) || key == question10.value) {
      sectionTotal += sectionArray[key];
    }
  }

  // Find the value of question 2
  question2Val = 0;
  if (sectionName == "transportation") {
    question2Val = question2.value * selectedTravelTime;
    sectionTotal += question2Val;
  }

  // Find the value for question6
  if (sectionName == "housing") {
    question5Val = selectedHousing / question5b.value;
    sectionTotal += question5Val;
  }

  // Add up the num inputs
  if (sectionName == "habits") {
    sectionTotal += 2.5;
    sectionTotal += (question8.value * 0.057985);
  }

  if (sectionName == "lifestyle") {
    sectionTotal += (question11NumOfPhones.value * 0.1065935 + question11NumOfLaptops.value * 0.4376176 + question11NumOfDesktops.value * 0.5291094 + question11NumOfTVs.value * 0.001979751)
  }

  return sectionTotal;
}

document.getElementById("sumbitButton").addEventListener("click", function CalcEmissions(event) {
  event.preventDefault();

  // Check if any required input is missing
  if (!numInput.value || !question1.value || !question2.value || !question3.value || !question4.value || !question5.value || !question7.value || !question8.value || !question10.value ||
    (question11NumOfPhones.value === "") || (question11NumOfLaptops.value === "") || (question11NumOfDesktops.value === "") || (question11NumOfTVs.value === "")) {

    // Alert the user that they need to fill out all the fields
    window.alert("Please fill out all the fields in the form.");
    return; // Exit the function if inputs are missing
  }

  document.getElementById("charts").style.visibility = 'visible';

  // If all inputs are provided, proceed with calculation
  const transportationTotal = parseFloat(calculateSectionEmissions("transportation"));
  const housingTotal = parseFloat(calculateSectionEmissions("housing"));
  const habitsTotal = parseFloat(calculateSectionEmissions("habits"));
  const lifestyleTotal = parseFloat(calculateSectionEmissions("lifestyle"));

  // Calculate total emissions
  let totalEmissions = transportationTotal + housingTotal + habitsTotal + lifestyleTotal;

  // Display result
  let resultElement = document.getElementById("result");
  resultElement.innerText = `Your estimated total carbon footprint is ${totalEmissions} tons of CO2 per year. \n You estimated your carbon footprint would be ${numInput.value} tons. \n For Reference: Ontario’s emissions per capita are the third lowest in Canada, at 10.4 tonnes of CO2 \nThis is 43% below the Canadian average of 18.2 tonnes per capita.`;

  // Create buttons
  summaryBtns.innerHTML = `<button id="btn1" onclick="summaryManager(1)"></button>
                            <button id="btn2" onclick="summaryManager(2)"></button>
                            <button id="btn3" onclick="summaryManager(3)"></button>
                            <button id="btn4" onclick="summaryManager(4)"></button>`;

  // Summary
  summaryManager(1);

  const maxValue = Math.ceil(totalEmissions, numInput.value);
  const canvasHeight = maxValue + 10; // Adjust the multiplier as needed for better visibility

  barGraphA.innerHTML = `<canvas id="barChartA" style="width:100%; max-width:700px; height:${canvasHeight}px;"></canvas>`;

  new Chart("barChartA", {
    type: 'bar',
    data: {
      labels: ['Your Emissions', 'Your Estimate', "Ontario Average", "Canadian Average"],
      datasets: [{
        label: 'Tons of CO2 (Every Year)',
        data: [totalEmissions, numInput.value, 10.4, 18.2],
        backgroundColor: [
          'rgba(16, 71, 48, 0.2)',
          'rgba(166, 123, 92, 0.2)',
          'rgba(255, 253, 253, 0.2)',
          'rgba(249, 199, 109, 0.2)'
        ],
        borderColor: [
          'rgba(16, 71, 48, 1)',
          'rgba(166, 123, 92, 1)',
          'rgba(255, 253, 253, 1)',
          'rgba(249, 199, 109, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0, // Start y-axis at 0
              max: maxValue + 10, // Set max to a bit higher than the max value
            },
          },
        ],
      },
    }
  });

  numOfWorlds = Math.ceil((totalEmissions * 8191988453) / 100000000000)
  // 12 125 424 420 tons annually (How much earth can take from human production)
  worldsText.innerHTML += `<p>If everyone's carbon footprint was the same as yours, our society would require ${numOfWorlds} Earths to live sustainably...</p>`

  for (i = 0; i < numOfWorlds; i++) {
    worldsText.innerHTML += `<img src="https://imgs.search.brave.com/KAF_7FehoNYG97ZheOYW4DtefIGZk_UTLFlge6aPYyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/ZWxlbWVudF9waWMv/MTYvMDUvMjkvMDA1/NzQ5YzQwODU1MDUy/LnBuZw" width="120" height="120" alt="Earth"/>`
  }

});

function summaryManager(btnNum) {
  if (btnNum == 1) {

    if (parseFloat(calculateSectionEmissions("transportation")) >= 3) {
      summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
            <p id="sect-p">
            Your transportation choices resulted in sub-optimal annual CO2 production. We would recommend improving your carbon footprint by using net 0 transportation methods such as walking or biking for short distances and investing in electric or hybrid vehicles or using public transport for longer daily commuting distances. Additionally, keeping a limit of 1 plane trip for leisure every year to help reduce your carbon footprint. Did you know that driving a car for 75km (1 hour) everyday for a year contributes to 6 tons of C02? Additionally taking multiple flights a year adds 1 whole ton of CO2 to your footprint every year.
            </p>`;
    }
    else if (parseFloat(calculateSectionEmissions("transportation")) >= 2) {
      summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
            <p id="sect-p">
            Your transportation choices resulted in average levels of yearly CO2 production. To improve your carbon footprint try using net 0 methods of transportation such as walking or biking for short distances and investing in electric or hybrid vehicles or public transport for longer daily commuting distances. Additionally, keeping a limit of 1 plane trip for leisure every year to help reduce your carbon footprint. Did you know that driving a car for 75km (1 hour) everyday for a year contributes to 6 tons of C02 alone?
            </p>`
    }
    else if (parseFloat(calculateSectionEmissions("transportation")) < 2) {
      summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
            <p id="sect-p">
            Your transportation choices resulted in optimal levels of CO2 production per year. Make sure to continue using net 0 methods of transportation such as walking or biking for short distances and continuing to use electric or hybrid vehicles or public transport for longer daily commuting distances. Did you know that driving a car for 75km (1 hour) everyday for a year contributes to 6 tons of C02?
            </p>`;
    }

    document.getElementById("btn1").style.backgroundColor = '#F1DDB9';
    document.getElementById("btn2").style.backgroundColor = '#A67B5C';
    document.getElementById("btn3").style.backgroundColor = '#A67B5C';
    document.getElementById("btn4").style.backgroundColor = '#A67B5C';
  }

  if (btnNum == 2) {

    if (parseFloat(calculateSectionEmissions("housing")) >= 12) {
      summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
            <p id="sect-p">
            Your housing situation showed high rates of annual CO2 production. To improve your situation, try living with more roommates to spread out the total CO2 production amount across all residents as just 1 single home produces a total 38 tons of CO2! Additionally, consider hand washing your dishes and mitigate the number of small appliances in your home.
            </p>`;
    }
    else if (parseFloat(calculateSectionEmissions("housing")) >= 8) {
      summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
            <p id="sect-p">
            Your transportation choices resulted in average levels of yearly CO2 production. To improve your carbon footprint try using net 0 methods of transportation such as walking or biking for short distances and investing in electric or hybrid vehicles or public transport for longer daily commuting distances. Additionally, keeping a limit of 1 plane trip for leisure every year to help reduce your carbon footprint. Did you know that driving a car for 75km (1 hour) everyday for a year contributes to 6 tons of C02 alone?
            </p>`
    }
    else if (parseFloat(calculateSectionEmissions("housing")) < 8) {
      summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
            <p id="sect-p">
            Your housing situation presented low rates of yearly CO2 production. Keep living with roommates to spread out the total CO2 production amount of all of the residents as 1 single home produces a total 38 tons of CO2!
            </p>`;
    }

    document.getElementById("btn1").style.backgroundColor = '#A67B5C';
    document.getElementById("btn2").style.backgroundColor = '#F1DDB9';
    document.getElementById("btn3").style.backgroundColor = '#A67B5C';
    document.getElementById("btn4").style.backgroundColor = '#A67B5C';
  }

  if (btnNum == 3) {

    if (parseFloat(calculateSectionEmissions("habits")) >= 6.6) {
      summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">
            Your daily habits contribute to high yearly CO2 production. To improve, consider taking shorter showers, incorporating more plant-based meals into your diet, and being more diligent with recycling and composting. These changes can significantly reduce your environmental impact. Did you know if every household in Canada shortened their shower time by just one minute, it could save enough water annually to fill over 200,000 Olympic-sized swimming pools!
            </p>`;
    }
    else if (parseFloat(calculateSectionEmissions("habits")) >= 6) {
      summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">
            Your daily habits result in an average yearly CO2 production. To reduce your carbon footprint, try implementing sustainable practices such as taking shorter showers, adjusting your diet to include more plant-based foods, and improving your recycling and composting habits. Did you know a single vegetarian meal can save about 2.5 kg of CO2 compared to a meat-based meal!
            </p>`
    }
    else if (parseFloat(calculateSectionEmissions("habits")) < 6) {
      summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">
            Your daily habits result in low yearly CO2 production. Keep up your sustainable practices such as taking shorter showers, maintaining an eco-friendly diet, and actively recycling and composting. These small actions collectively make a big difference in reducing emissions. Did you know composting can reduce household waste by up to 30%, keeping it out of landfills and reducing methane emissions!
            </p>`;
    }

    document.getElementById("btn1").style.backgroundColor = '#A67B5C';
    document.getElementById("btn2").style.backgroundColor = '#A67B5C';
    document.getElementById("btn3").style.backgroundColor = '#F1DDB9';
    document.getElementById("btn4").style.backgroundColor = '#A67B5C';
  }

  else if (btnNum == 4) {

    if (parseFloat(calculateSectionEmissions("lifestyle")) >= 2.5) {
      summaryText.innerHTML = `<h3 id="sect-h">Lifestyle:</h3>
          <p id="sect-p">
          Your lifestyle choices contribute to high yearly CO2 production. To lower your footprint, consider purchasing second-hand or sustainable clothing, using electronics for their full lifespan before replacing them, and avoiding unnecessary purchases. E-waste accounts for 70% of toxic waste in landfills proper recycling and reuse of electronics can help reduce environmental harm!
          </p>`;
    }
    else if (parseFloat(calculateSectionEmissions("lifestyle")) >= 1.5) {
      summaryText.innerHTML = `<h3 id="sect-h">Lifestyle:</h3>
          <p id="sect-p">
          Your lifestyle choices result in an average yearly CO2 production. To further reduce your carbon footprint, try buying second-hand or sustainable clothing, extending the lifespan of your electronics before replacing them, and limiting unnecessary purchases. Producing a single smartphone generates around 85 kg of CO2, so using your device for just one extra year can significantly cut emissions!
          </p>`
    }
    else if (parseFloat(calculateSectionEmissions("lifestyle")) < 1.5) {
      summaryText.innerHTML = `<h3 id="sect-h">Lifestyle:</h3>
          <p id="sect-p">
          Your lifestyle choices contribute to minimal CO2 production each year. Your conscious decisions to purchase second-hand or sustainable clothing, use electronics for their full lifespan before replacing them, and limit unnecessary purchases help keep your carbon footprint low. The fashion industry is responsible for about 10% of global carbon emissions, buying second-hand can help reduce this impact!
          </p>`;
    }

    document.getElementById("btn1").style.backgroundColor = '#A67B5C';
    document.getElementById("btn2").style.backgroundColor = '#A67B5C';
    document.getElementById("btn3").style.backgroundColor = '#A67B5C';
    document.getElementById("btn4").style.backgroundColor = '#F1DDB9';
  }
}
