
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
    home: "Home",
    food: "Food",
    habits: "Habits",
    commute: " How do you typically commute to school or work?",
    select: "(Select one)",
    select1: "(Select one)",
    select2: "(Select one)",
    select3: "(Select one)",
    select4: "(Select one)",
    select5: "(Select one)",
    select6: "(Select one)",
    select7: "(Select one)",
    select8: "(Select one)",
    select9: "(Select one)",
    select10: "(Select one)",
    select11: "(Select one)",
    commute_time: "If you answered car or bus - How long does it take you to commute to work",
    flights: "How often do you take flights for leisure or business?",
    heating: "How do you heat your home?",
    appliances: "Do you use any of the following? Dryer, washer, dishwasher, or refridgerator",
    household_size: "How many people live in your household?",
    diet: "What best describes your diet?",
    meat_consumption: "(optional) How often do you consume meat or dairy products?",
    water_usage: "How often do you take shorter showers or use less water?",
    local_goods: "Do you buy locally-produced goods?",
    recycling: "Do you recycle?",
    electricity_usage: "How often do you leave lights or appliances on when not in use?",
    submit: "Submit",
    projectdesc: "People live their everyday lives oblivious that every decision they make alters their impact on our environment. EcoTraQ is a carbon footprint calculator that helps people understand and reduce their environmental impact, it is a tool for tracking personal emissions and website carbon footprints. Users input their lifestyle choices or website links to see how much carbon they release. By comparing user’s results with the average emissions released per capita, we can better understand how to live a more efficient lifestyle. Our project aims to raise awareness for individuals to take action towards a more sustainable future."
  },
  fr: {
    title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
    questionnaire: "Quiz",
    about: "Crédits",
    credits1: "Créé par: Cameron Lemoine et Hasan Ahmed",
    credits2: "Avec l'aide de: Will Reavie et Aaron Chung",
    topbtn: "En Haut",
    github: "Page de GitHub",
    pbpage: "Page de ProjectBoard",
    home: "Maison",
    food:"Nourriture",
    habits: "Habitudes",
    commute: "Comment vous transportez-vous à l'ecole ou au travail?",
    select: "(Sélectionnez-en un",
    select1: "(Sélectionnez-en un",
    select2: "(Sélectionnez-en un",
    select3: "(Sélectionnez-en un",
    select4: "(Sélectionnez-en un",
    select5: "(Sélectionnez-en un",
    select6: "(Sélectionnez-en un",
    select7: "(Sélectionnez-en un",
    select8: "(Sélectionnez-en un",
    select9: "(Sélectionnez-en un",
    select10: "(Sélectionnez-en un",
    select11: "(Sélectionnez-en un",
    commute_time: "Si vous avez répondu voiture ou bus - Combien de temps vous faut-il pour vous rendre au travail/à l'école ?",
    flights: "À quelle fréquence prenez-vous l'avion pour vos loisirs ou vos affaires ?",
    heating: "Comment chauffez-vous votre maison ?",
    appliances: "Utilises-tu l'un des éléments suivants ? Sèche-linge, lave-linge, lave-vaisselle ou réfrigérateur ?",
    household_size: "Combien de personnes vivent dans votre maison ?",
    diet: "Quel est le mieux pour décrire ton régime alimentaire ?",
    meat_consumption: "Quelle est votre consommation de viande ou produits lait quotidienne ?",
    water_usage: "Prends-tu souvent des douches plus courtes ou utilises-tu moins d'eau ?",
    local_goods: "Achètes-tu des produits locaux ?",
    recycling: "Est-ce que tu recycles ?",
    electricity_usage: "Combien de fois laissez-vous des lumières ou des appareils allumés lorsque vous ne les utilisez pas ?",
    submit:"Soumettre",
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
  document.getElementById('home').textContent = translations[lang].home;
  document.getElementById('food').textContent = translations[lang].food;
  document.getElementById('habits').textContent = translations[lang].habits;

  document.getElementById('commute').textContent = translations[lang].commute;
   document.getElementById('select').textContent = translations[lang].select;
  document.getElementById('commute_time').textContent = translations[lang].commute_time;
  document.getElementById('flights').textContent = translations[lang].flights;
  document.getElementById('heating').textContent = translations[lang].heating;
  document.getElementById('household_size').textContent = translations[lang].household_size;
  document.getElementById('appliances').textContent = translations[lang].appliances;
  document.getElementById('diet').textContent = translations[lang].diet;
  document.getElementById('meat_consumption').textContent = translations[lang].meat_consumption;
  document.getElementById('water_usage').textContent = translations[lang].water_usage;
  document.getElementById('local_goods').textContent = translations[lang].local_goods;
  document.getElementById('recycling').textContent = translations[lang].recycling;
  document.getElementById('electricity_usage').textContent = translations[lang].electricity_usage;
   document.getElementById('select1').textContent = translations[lang].select1;   document.getElementById('select2').textContent = translations[lang].select2;   document.getElementById('select3').textContent = translations[lang].select3;   document.getElementById('select4').textContent = translations[lang].select4;   document.getElementById('select5').textContent = translations[lang].select5;   document.getElementById('select6').textContent = translations[lang].select6;   document.getElementById('select7').textContent = translations[lang].select7;   document.getElementById('select8').textContent = translations[lang].select8;   document.getElementById('select9').textContent = translations[lang].select9;   document.getElementById('select10').textContent = translations[lang].select10;   document.getElementById('select11').textContent = translations[lang].select11;
  document.getElementById('submit').value = translations[lang].submit;


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
    "": 0,
    //q1
    "Car": 6,
    "EV": 1,
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
    "1": 7,
    "2": 8,
    "3-4": 6,
    "5_or_more": 3,
    //q5
    "One": 4,
    "Two": 1,
    "Three": 8,
    "All": 7,
    //q6
    "15": 6,
    "30": 4,
    "60": 4,
    //q7
    "vegan": 4,
    "vegetarian": 4,
    "omnivore": 2,
    //q8
    "daily": 4,
    "several_times": 2,
    "rarely_never": 9,
    //q9
    "always0": 8,
    "sometimes0": 2,
    "rarely0": 3,
    //q10
    "always1": 9,
    "sometimes1": 0,
    "rarely1": 8,
    //q11
    "always2": 7,
    "sometimes2": 6,
    "rarely2": 1,
    //q12
    "always3": 4,
    "sometimes3": 3,
    "rarely3": 2,
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
