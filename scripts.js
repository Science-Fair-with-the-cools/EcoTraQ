
// Language files
const translations = {
  en: {
    title: "EcoTraQ (Carbon footprint calculator)",
    questionnaire: "Questionnaire",
    about: "About",
    credits1: "Created by:  Cameron Lemoine and Hasan Ahmed",
    credits2: " With help from: Will Reavie and Aaron Chung",
    topbtn: "Back to Top",
    github: "GitHub Repository",
    pbpage: "ProjectBoard Page",

    // submit: "Submit",
    projectdesc: "People live their everyday lives oblivious that every decision they make alters their impact on our environment. EcoTraQ is a carbon footprint calculator that helps people understand and reduce their environmental impact, it is a tool for tracking personal emissions and website carbon footprints. Users input their lifestyle choices or website links to see how much carbon they release. By comparing user’s results with the average emissions released per capita, we can better understand how to live a more efficient lifestyle. Our project aims to raise awareness for individuals to take action towards a more sustainable future."
  },
  fr: {
    title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
    questionnaire: "Quiz",
    about: "Crédits",
    credits1: "Créé par: Cameron Lemoine et Hasan Ahmed",
    credits2: "Avec aide de: Will Reavie et Aaron Chung",
    topbtn: "En Haut",
    github: "Page de GitHub",
    pbpage: "Page de ProjectBoard",

    // submit:"Soumettre",
    projectdesc: "Les gens vivent leur vie quotidienne sans se rendre compte que chaque décision qu'ils prennent modifie leur impact sur l'environnement. EcoTraQ est un calculateur d'empreinte carbone qui aide les gens à comprendre et à réduire leur impact sur l'environnement. C'est un outil qui permet de suivre les émissions personnelles et l'empreinte carbone des sites web. Les utilisateurs saisissent leurs choix de mode de vie ou les liens de leur site web pour connaître la quantité de carbone qu'ils émettent. En comparant les résultats des utilisateurs avec les émissions moyennes par habitant, nous pouvons mieux comprendre comment adopter un mode de vie plus efficace. Notre projet vise à sensibiliser les individus à agir en faveur d'un avenir plus durable."
  }
};

// Function to switch language
function switchLanguage(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('projectdesc').textContent = translations[lang].projectdesc;
  document.getElementById('questionnaire').textContent = translations[lang].questionnaire;
  document.getElementById('about').textContent = translations[lang].about;
  document.getElementById('credits2').textContent = translations[lang].credits2;

  document.getElementById('credits1').textContent = translations[lang].credits1;
  document.getElementById('topbtn').textContent = translations[lang].topbtn;
  document.getElementById('github').textContent = translations[lang].github;
  document.getElementById('pbpage').textContent = translations[lang].pbpage;


  // code below not working cause submit button is programmed as an input not a button idk

  // document.getElementsById('submit').textContent = translations[lang].submit;

}


// Detect user's language
const userLanguage = navigator.language.split('-')[0];
switchLanguage(userLanguage);

// Get button
const topBtn = document.getElementById("topbtn");

// Scroll to top
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//backend

// Function to handle form submission
document.getElementById("carbonForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Define emission values for each option
  const emissions = {
    //q1
    "Car": 6, 
    "Public Bus": 2,
    "Bike": 1,
    "Walking": 5,
    //q2
    "multiple_times": 7,
    "once": 7,
    "rarely": 7,
      //q3
    "gas": 7,
    "electricity": 7,
    "other": 7,
    //q4
    "1":7,
    "2":8,
    "3-4":6,
    "5_or_more":3,
    //q5
    "One":4,
    "Two":1,
    "Three":8,
    "All":7,
    //q6
    "poor":6,
    "average":4,
    "excellent":4,
    //q7
    "vegan":4,
    "vegetarian":4,
    "omnivore":2,
    //q8
    "daily":4,
    "several_times":2,
    "rarely_never":9,
    //q9
    "always0":8,
    "sometimes0":2,
    "rarely0":3,
    //q10
    "always1":9,
    "sometimes1":0,
    "rarely1":8,
    //q11
    "always2":7,
    "sometimes2":6,
    "rarely2":1,
    //q12
    "always3":4,
    "sometimes3":3,
    "rarely3":2,
  };
  let totalEmissions = 0;
  // Retrieve selected options and sum up emissions
  const formData = new FormData(this);
  formData.forEach((value, key) => {
    totalEmissions += emissions[value];
  });

  // Display result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Your estimated carbon footprint is ${totalEmissions} tons of CO2 per year.`;
})
