
  // Get button
  const topBtn = document.getElementById("topbtn");
  
  // Scroll to top
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Function to calculate total emissions for a section
function calculateSectionEmissions(sectionName) {
    let sectionTotal = 0;
}

    const numInput = document.getElementById("numInput");

    // Get textbox for summary
    const summaryText = document.getElementById("box");

    // Get the div so we can make the buttons
    const summaryBtns = document.getElementById("nav-btns");

    const piGraph = document.getElementById("chart");

document.getElementById("sumbitButton").addEventListener("click", function CalcEmissions (event) {
        event.preventDefault();

        if(select_element1.value == "" || select_element2.value == "" || select_element3.value == "" || select_element4.value == "" || select_element5.value == "" || select_element6.value == "" || numInput.value.toString() == "" || select_element8.value == "" || select_element9.value == "" || select_element10.value == "") {
            window.alert("Please fill out the form =)");
        }

        else{

        // Calculate total emissions for each section
        const transportationTotal = calculateSectionEmissions("transportation");
        const housingTotal = calculateSectionEmissions("housing");
        const dietTotal = calculateSectionEmissions("diet");
        const habitsTotal = calculateSectionEmissions("habits");

         // Calculate total emissions
        let totalEmissions = transportationTotal + housingTotal + dietTotal + habitsTotal;

        // Display result
        let resultElement = document.getElementById("result");
        // Change what this says: resultElement.innerText = `Your estimated total carbon footprint is ${totalEmissions} tons of CO2 per year. \nYour estimated carbon footprint was ${numInput.value.toString()} tons. \nTake a look at how they compare! \n**For Reference** Ontario’s emissions per capita are the third lowest in Canada, at 10.1 tonnes of CO2 \nThis is 43% below the Canadian average of 17.7 tonnes per capita.`;

          // Create buttons
          summaryBtns.innerHTML = `<button id="btn1" onclick="summaryManager(1)"></button>
          <button id="btn2" onclick="summaryManager(2)"></button>
          <button id="btn3" onclick="summaryManager(3)"></button>
          <button id="btn4" onclick="summaryManager(4)"></button>`;

          // Summary
          summaryManager(1);

          graph.innerHTML = `<canvas id="myChart" style="width:100%;max-width:700px"></canvas>`

          var xValues = ["Your emissions", "Your estimate", "Average emissions"];
          var yValues = [totalEmissions, numInput.value, 17.7];
          var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145"
];

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
        }
    });

    function summaryManager(btnNum){
        if (btnNum == 1){

            if(calculateSectionEmissions("transportation") >= 2){
                summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
                <p id="sect-p">In this section of the form, your answers presented high levels of carbon emissions. To reduce carbon emissions with transportation, try walking, or biking for short distances and using an electric vehicle or public transportation for far distance travels. Also try traveling less by plane for vacations and try other methods such as cruises or roadtrips.</p>`;
            }
            else if(calculateSectionEmissions("transportation") < 2){
                summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
                <p id="sect-p">In this section of the form, your answers present optimal levels carbon emissions with your transportation habits. Keep using more renewable transport methods such as: public transportation, electric vehicles, walking and biking. =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#57CC99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#80ED99';
            document.getElementById("btn4").style.backgroundColor = '#80ED99';
        }
        
        if (btnNum == 2){

            if(calculateSectionEmissions("housing") >= 17){
                summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
                <p id="sect-p">Your housing situation seems to present high rates of carbon release per year. In order to help reduce your emissions, try switching to natural gas for heating your home. Also try relying less on appliances such as: dishwashers, washing machines and dryers for cleaning things. Remember to turn off your heating when you are leaving the house for travel and when buying new appliances look into eco-friendly or more efficient appliances.
</p>`;
            }
            else if (calculateSectionEmissions("housing") < 17){
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

            if(calculateSectionEmissions("diet") >= 3){
                summaryText.innerHTML = `<h3 id="sect-h">Diet:</h3>
                <p id="sect-p">According to your input, your eating habits produce increased output of carbon discharge. Some methods to reduce your carbon footprint from diet are: eating less meat/animal products (mainly beef) and consuming more plants (fruits and vegetables) from local areas. Sources say that having even only 1 vegan or vegetarian day a week can save 100-150 kg of CO2 per year!
</p>`;
            }
            else if(calculateSectionEmissions("diet") < 3){
                summaryText.innerHTML = `<h3 id="sect-h">Diet:</h3>
                <p id="sect-p">According to your input, your eating habits showed efficient outputs of carbon discharge. Continue reducing your consumption of animal products and keep eating more local fruits and vegetables. =)
</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#80ED99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#57CC99';
            document.getElementById("btn4").style.backgroundColor = '#80ED99';
        }

        else if(btnNum == 4){

            if(calculateSectionEmissions("habits") >= 2.5){
            summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">Your everyday habits demonstrate sub-optimal levels of carbon production in your day to day life. To help reduce carbon production caused within your everyday habits make sure to save water by taking shorter showers and closing sink while brushing your teeth. Also ensure to recycle and compost as much as possible and conserve your light bulbs (close lights when not in use).
</p>`;
            }
            else if(calculateSectionEmissions("habits") < 2.5){
            summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">Your everyday habits demonstrate optimal levels of carbon production in your day to day life. Make sure to continue practicing efficient habits such as water conservation, light bulb conservation and composting and recycling. =)
</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#80ED99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#80ED99';
            document.getElementById("btn4").style.backgroundColor = '#57CC99';
        }
    }
