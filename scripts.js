
  
 // Scroll to top
 function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get textbox for summary
const summaryText = document.getElementById("resultBox");

// Get the div so we can make the buttons
const summaryBtns = document.getElementById("navBtns");

// piChart holder
const piGraph = document.getElementById("piChart");

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
   "omnivore": 2.5,
   "carnivore": 3.3,
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

   if(key == question1.value){
     selectedTravelTime += sectionArray[key];
   }

   if(key == question4.value){
    selectedHousing += sectionArray[key];
   }

   if(key == question3.value || key == question5.value || (key == question6DryerBox.value && question6DryerBox.checked) || 
   (key == question6DishwasherBox.value && question6DishwasherBox.checked) || (key == question6FridgeBox.value && question6FridgeBox.checked) || 
   (key == question6StoveElecBox.value && question6StoveElecBox.checked) || (key == question6StoveGasBox.value && question6StoveGasBox.checked) || 
   (key == question6SmallAppsBox.value && question6SmallAppsBox.checked) || key == question7.value || (key == question9RecycleBox.value && question9RecycleBox.checked) || 
   (key == question9CompostBox.value && question9CompostBox.checked) || key == question10.value){
     sectionTotal += sectionArray[key];
   }
  }

  // Find the value of question 2
  question2Val = 0;
  if(sectionName == "transportation"){
   question2Val = question2.value * selectedTravelTime;
   sectionTotal += question2Val;
  }

  // Find the value for question6
  if(sectionName == "housing"){
    question5Val = selectedHousing / question5b.value;
    sectionTotal += question5Val;
  }

  // Add up the num inputs
  if(sectionName == "habits"){
   sectionTotal += 2.5;
   sectionTotal += (question8.value * 0.057985);
  }

  if(sectionName == "lifestyle"){
   sectionTotal += (question11NumOfPhones.value * 0.1065935 + question11NumOfLaptops.value * 0.4376176 + question11NumOfDesktops.value * 0.5291094 + question11NumOfTVs.value * 0.001979751)
  }

  return sectionTotal;
}

document.getElementById("sumbitButton").addEventListener("click", function CalcEmissions (event) {
   event.preventDefault();

   // Check if any required input is missing
   if (!numInput.value || !question1.value || !question2.value || !question3.value || !question4.value || !question5.value || !question7.value || !question8.value || !question10.value || 
       (question11NumOfPhones.value === "") || (question11NumOfLaptops.value === "") || (question11NumOfDesktops.value === "") || (question11NumOfTVs.value === "")) {
       
       // Alert the user that they need to fill out all the fields
       window.alert("Please fill out all the fields in the form.");
       return; // Exit the function if inputs are missing
   }

   // If all inputs are provided, proceed with calculation
   const transportationTotal = parseFloat(calculateSectionEmissions("transportation"));
   const housingTotal = parseFloat(calculateSectionEmissions("housing"));
   const habitsTotal = parseFloat(calculateSectionEmissions("habits"));
   const lifestyleTotal = parseFloat(calculateSectionEmissions("lifestyle"));

   // Calculate total emissions
   let totalEmissions = transportationTotal + housingTotal + habitsTotal + lifestyleTotal;

   // Display result
   let resultElement = document.getElementById("result");
   resultElement.innerText = `Your estimated total carbon footprint is ${totalEmissions} tons of CO2 per year. \nYour estimated carbon footprint was ${numInput.value} tons. \nTake a look at how they compare! \n**For Reference** Ontario’s emissions per capita are the third lowest in Canada, at 10.1 tonnes of CO2 \nThis is 43% below the Canadian average of 17.7 tonnes per capita.`;

   // Create buttons
   summaryBtns.innerHTML = `<button id="btn1" onclick="summaryManager(1)"></button>
                            <button id="btn2" onclick="summaryManager(2)"></button>
                            <button id="btn3" onclick="summaryManager(3)"></button>
                            <button id="btn4" onclick="summaryManager(4)"></button>`;

   // Summary
   summaryManager(1);

   piGraph.innerHTML = `<canvas id="myChart" style="width:100%;max-width:700px"></canvas>`;

   var xValues = ["Your emissions", "Your estimate", "Average emissions"];
   var yValues = [totalEmissions, numInput.value, 17.7];
   var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

   new Chart("myChart", {
       type: "pie",
       data: {
           labels: xValues,
           datasets: [{
               backgroundColor: barColors,
               data: yValues
           }]
       },
       options: {
           title: {
               display: true,
               text: "Your Carbon Emissions Compared to the Average"
           }
       }
   });
});

  function summaryManager(btnNum){
      if (btnNum == 1){

          if(parseFloat(calculateSectionEmissions("transportation")) >= 2){
              summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
              <p id="sect-p">In this section of the form, your answers presented high levels of carbon emissions. To reduce carbon emissions with transportation, try walking, or biking for short distances and using an electric vehicle or public transportation for far distance travels. Also try traveling less by plane for vacations and try other methods such as cruises or roadtrips.</p>`;
          }
          else if(parseFloat(calculateSectionEmissions("transportation")) < 2){
              summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
              <p id="sect-p">In this section of the form, your answers present optimal levels carbon emissions with your transportation habits. Keep using more renewable transport methods such as: public transportation, electric vehicles, walking and biking. =)</p>`;
          }

          document.getElementById("btn1").style.backgroundColor = '#57CC99';
          document.getElementById("btn2").style.backgroundColor = '#80ED99';
          document.getElementById("btn3").style.backgroundColor = '#80ED99';
          document.getElementById("btn4").style.backgroundColor = '#80ED99';
      }
      
      if (btnNum == 2){

          if (parseFloat(calculateSectionEmissions("housing")) >= 17){
              summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
              <p id="sect-p">Your housing situation seems to present high rates of carbon release per year. In order to help reduce your emissions, try switching to natural gas for heating your home. Also try relying less on appliances such as: dishwashers, washing machines and dryers for cleaning things. Remember to turn off your heating when you are leaving the house for travel and when buying new appliances look into eco-friendly or more efficient appliances.
</p>`;
          }
          else if (parseFloat(calculateSectionEmissions("housing")) < 17){
              summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
              <p id="sect-p">Your housing situation seems to present fairly low rates of carbon release. Make sure to keep conserving energy by using less appliances and using more eco friendly heating sources. When buying new appliances look into eco-friendly or more efficient appliances. =)
</p>`;
          }

          document.getElementById("btn1").style.backgroundColor = '#80ED99';
          document.getElementById("btn2").style.backgroundColor = '#57CC99';
          document.getElementById("btn3").style.backgroundColor = '#80ED99';
          document.getElementById("btn4").style.backgroundColor = '#80ED99';
      }

      if(btnNum == 3) {

          if(parseFloat(calculateSectionEmissions("habits")) >= 3){
              summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
              <p id="sect-p">According to your input, your eating habits produce increased output of carbon discharge. Some methods to reduce your carbon footprint from diet are: eating less meat/animal products (mainly beef) and consuming more plants (fruits and vegetables) from local areas. Sources say that having even only 1 vegan or vegetarian day a week can save 100-150 kg of CO2 per year!
</p>`;
          }
          else if(parseFloat(calculateSectionEmissions("habits")) < 3){
              summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
              <p id="sect-p">According to your input, your eating habits showed efficient outputs of carbon discharge. Continue reducing your consumption of animal products and keep eating more local fruits and vegetables. =)
</p>`;
          }

          document.getElementById("btn1").style.backgroundColor = '#80ED99';
          document.getElementById("btn2").style.backgroundColor = '#80ED99';
          document.getElementById("btn3").style.backgroundColor = '#57CC99';
          document.getElementById("btn4").style.backgroundColor = '#80ED99';
      }

      else if(btnNum == 4){

          if(parseFloat(calculateSectionEmissions("lifestyle")) >= 2.5){
          summaryText.innerHTML = `<h3 id="sect-h">Lifestyle:</h3>
          <p id="sect-p">Your everyday habits demonstrate sub-optimal levels of carbon production in your day to day life. To help reduce carbon production caused within your everyday habits make sure to save water by taking shorter showers and closing sink while brushing your teeth. Also ensure to recycle and compost as much as possible and conserve your light bulbs (close lights when not in use).
</p>`;
          }
          else if(parseFloat(calculateSectionEmissions("lifestyle")) < 2.5){
          summaryText.innerHTML = `<h3 id="sect-h">Lifestyle:</h3>
          <p id="sect-p">Your everyday habits demonstrate optimal levels of carbon production in your day to day life. Make sure to continue practicing efficient habits such as water conservation, light bulb conservation and composting and recycling. =)
</p>`;
          }

          document.getElementById("btn1").style.backgroundColor = '#80ED99';
          document.getElementById("btn2").style.backgroundColor = '#80ED99';
          document.getElementById("btn3").style.backgroundColor = '#80ED99';
          document.getElementById("btn4").style.backgroundColor = '#57CC99';
      }
  }
