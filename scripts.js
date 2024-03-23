
// Language files
const translations = {
    en: {
        title: "EcoTraQ (Carbon footprint calculator)",
        header1:"Personal TraQ",
        header2:"Site TraQ",
        questionnaire:"Questionnaire",
        about:"About",
        credits1:"Created by:  Cameron Lemoine and Hasan Ahmed",
        credits2:" With help from: Will Reavie and Aaron Chung",
        topbtn:"Back to Top",
        footerbtn:"SiteTraQ",
        github: "GitHub Repository",
        pbpage: "ProjectBoard Page",
        // submit: "Submit",
        projectdesc: "People live their everyday lives oblivious to the fact that every decision they make may alter their impact on our environment. It is our job to ensure our community is aware of how they could reduce, manage, and alter either positively or negatively their carbon footprint. We created a Carbon Footprint Calculator (EcoTraQ), using various coding languages (Hyper Text Markup Language, Cascading Style Sheets, Javascript). Our work is hosted on a website via GitHub, which displays a questionnaire, once filled out the user can see their results alongside average results among Canadians. Lastly, we demonstrate how users can reduce and manage their carbon footprint using easy-to-follow steps catered towards each individual's results."
    },
    fr: {
        title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
        header1:"TraQ personnel",
        header2:"TraQ des Sites",
        questionnaire:"Quiz",
        about:"Crédits",
        credits1:"Créé par: Cameron Lemoine et Hasan Ahmed",
        credits2:"Avec aide de: Will Reavie et Aaron Chung",
        topbtn:"En Haut",
        footerbtn:"TraQ des Sites",
        github: "Page de GitHub",
        pbpage: "Page de ProjectBoard",
        // submit:"Soumettre",
        projectdesc: "Les gens vivent toutes leurs vies inconscient sur le fait que leurs décisions quotidiennes peuvent impacter notre environnement. C'est notre tâche à assurer que notre communauté devient conscient de l'impact qu'iels ont sur leur empreinte écologique. Nous avons créé un calculateur d'empreinte écologique (EcoTraQ), utilisant une variété de langues de programmations (Langage de balisage d'hypertexte, feuille de style en cascade et JavaScript). Notre œuvre se trouve sur un site web de GitHub, qui affiche un questionnaire. Une fois terminé, l'utilisateur peut voir leurs résultats comparés à ceux des autres Canadiens. Dernièrement, nous démontrons comment l'utilisateur peut réduire et gérer leur empreinte écologique avec des étapes faciles, uniques aux résultats de chaque individu."
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('projectdesc').textContent = translations[lang].projectdesc;
  document.getElementById('header1').textContent = translations[lang].header1;
   document.getElementById('header2').textContent = translations[lang].header2;
  document.getElementById('questionnaire').textContent = translations[lang].questionnaire;
document.getElementById('about').textContent = translations[lang].about;
  document.getElementById('credits2').textContent = translations[lang].credits2;
  
document.getElementById('credits1').textContent = translations[lang].credits1;
  document.getElementById('footerbtn').textContent = translations[lang].footerbtn;
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
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
