
// Language files
const translations = {
    en: {
        title: "EcoTraQ (Carbon footprint calculator)",
        header1:"Personal TraQ",
        header2:"Site TraQ",
        about:"About",
        credits1:"Created by:  Cameron Lemoine and Hasan Ahmed",
        credits2:" With help from: Will Reavie and Aaron Chung",
        topbtn:"Back to Top",
        footerbtn:"SiteTraQ",
        github: "GitHub Repository",
        pbpage: "ProjectBoard Page",
        // submit: "Submit",
      sitetraqdesc: "Every single website on the internet has a carbon footprint.Physicl hosting servers use electricity that use non-renewable energy sources to keep our internet alive as we know it. Want to know what a website's annual carbon footprint is? Find out Below!<",
    },
    fr: {
        title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
        header1:"TraQ personnel",
        header2:"TraQ des Sites",
        about:"Crédits",
        credits1:"Créé par: Cameron Lemoine et Hasan Ahmed",
        credits2:"Avec aide de: Will Reavie et Aaron Chung",
        topbtn:"En Haut",
        footerbtn:"TraQ des Sites",
        github: "Page de GitHub",
        pbpage: "Page de ProjectBoard",
        // submit:"Soumettre",
          sitetraqdesc: "Les serveurs des centres d'hébergement physique utilisent de l'électricité provenant de sources d'énergie non renouvelables pour maintenir en vie l'internet. Vous voulez savoir quelle est l'empreinte carbone annuelle d'un site web ? Découvrez-le ci-dessous !",
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('sitetraqdesc').textContent = translations[lang].sitetraqdesc;
  document.getElementById('header1').textContent = translations[lang].header1;
   document.getElementById('header2').textContent = translations[lang].header2;
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
