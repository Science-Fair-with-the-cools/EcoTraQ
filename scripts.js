
  // Get button
  const topBtn = document.getElementById("topbtn");
  
  // Scroll to top
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Get select elements
  const select_element1 = document.getElementById("select-element1");
  const select_element2 = document.getElementById("select-element2");
  const select_element3 = document.getElementById("select-element3");
  const select_element4 = document.getElementById("select-element4");
  const select_element5 = document.getElementById("select-element5");
  const select_element6 = document.getElementById("select-element6");
  const select_element7 = document.getElementById("select-element7");
  const select_element8 = document.getElementById("select-element8");
  const select_element9 = document.getElementById("select-element9");
  const select_element10 = document.getElementById("select-element10");

// Define emission values for each option
const emissions = {
    transportation: {
      "Car": 3.3863,
      "EV": 0,
      "Public_Bus": 1.25125,
      "Bike": 0,
      "Walking": 0,
      //q2
      "multiple_times": 1.008,
      "once": 0.336,
      "rarely": 0,
    },
    housing: {
      "town": 6.08,
      "single": 39.55,
      "apartment": 10.33,
      "mobile": 1.14,
      //q
      "Gas": 3.265,
      "Elec": 3.311,
      //q
      "One": 0.1325,
      "Two": 0.265,
      "Three": 0.3975,
      "All": 0.53,
    },
    diet: {
      "vegan": 1.5,
      "vegetarian": 1.7,
      "omnivore": 2.5,
      "carnivore": 3.3,
      "nobeef": 1.9,
      //q
      "several_times": 0.52811735,
      "few_times": 0.41788635,
      "rarely_never": 0.110231,
    },
      habits: {
      "always0": 3.63,
      "sometimes0": 1.8143694,
      "rarely0": 0.9071847,
        //q
      "always2": -0.15,
      "sometimes2": -0.10,
      "rarely2": -0.05,
      "idk_dude": 0,
        //q
      "always3": 0.0346,
      "sometimes3": 0.0174,
      "rarely3": 0.0110231,
      "idk4": 0.0087,
    }
  };

  // Function to calculate total emissions for a section
function calculateSectionEmissions(sectionName) {
    let sectionTotal = 0;
    let sectionArray = emissions[sectionName];

    for(var key in sectionArray){
        // if the array the value corresponds to the current selection {
            if(key == select_element1.value || key == select_element2.value || key == select_element3.value || key == select_element4.value || key == select_element5.value || key == select_element6.value || key == select_element7.value || key == select_element8.value || key == select_element9.value || key == select_element10.value){
                sectionTotal += sectionArray[key];
            }
        }
    
    return sectionTotal;
}

    const numInput = document.getElementById("numInput");

    // Get textbox for summary
    const summaryText = document.getElementById("box");

    // Get the div so we can make the buttons
    const summaryBtns = document.getElementById("nav-btns");

document.getElementById("goof").addEventListener("click", function CalcEmissions (event) {
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
        resultElement.textContent = `Your estimated total carbon footprint is ${totalEmissions} tons of CO2 per year. Your estimated carbon footprint was ${numInput.value.toString()} tons. Take a look at how they compare!`;

          // Create buttons
          summaryBtns.innerHTML = `<button id="btn1" onclick="summaryManager(1)"></button>
          <button id="btn2" onclick="summaryManager(2)"></button>
          <button id="btn3" onclick="summaryManager(3)"></button>
          <button id="btn4" onclick="summaryManager(4)"></button>`;

          // Summary
          summaryManager(1);
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
                <p id="sect-p">In this section of the form, your answers present optimal levels carbon emissions with your transportation habbits. Keep using more renewable transport methods such as: public transportation, electric vehicles, walking and biking. =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#885607';
            document.getElementById("btn2").style.backgroundColor = '#93d293';
            document.getElementById("btn3").style.backgroundColor = '#93d293';
            document.getElementById("btn4").style.backgroundColor = '#93d293';
        }
        
        if (btnNum == 2){

            if(calculateSectionEmissions("housing") >= 14){
                summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
                <p id="sect-p">U suck =(</p>`;
            }
            else if (calculateSectionEmissions("housing") < 14){
                summaryText.innerHTML = `<h3 id="sect-h">Housing:</h3>
                <p id="sect-p">U are awesome sauce =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#93d293';
            document.getElementById("btn2").style.backgroundColor = '#885607';
            document.getElementById("btn3").style.backgroundColor = '#93d293';
            document.getElementById("btn4").style.backgroundColor = '#93d293';
        }

        if(btnNum == 3) {

            if(calculateSectionEmissions("diet") >= 3.7){
                summaryText.innerHTML = `<h3 id="sect-h">Diet:</h3>
                <p id="sect-p">U eat too much meet, fatty =(</p>`;
            }
            else if(calculateSectionEmissions("diet") < 3.7){
                summaryText.innerHTML = `<h3 id="sect-h">Diet:</h3>
                <p id="sect-p">Keep up the veganism dude YOLO =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#93d293';
            document.getElementById("btn2").style.backgroundColor = '#93d293';
            document.getElementById("btn3").style.backgroundColor = '#885607';
            document.getElementById("btn4").style.backgroundColor = '#93d293';
        }

        else if(btnNum == 4){

            if(calculateSectionEmissions("habits") >= 2.5){
            summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">Fix ur habits loser</p>`;
            }
            else if(calculateSectionEmissions("habits") < 2.5){
            summaryText.innerHTML = `<h3 id="sect-h">Habits:</h3>
            <p id="sect-p">Wowie such a dreamy organised person =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#93d293';
            document.getElementById("btn2").style.backgroundColor = '#93d293';
            document.getElementById("btn3").style.backgroundColor = '#93d293';
            document.getElementById("btn4").style.backgroundColor = '#885607';
        }
    }
