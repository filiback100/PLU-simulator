const pluKoder = {
  banan: 94011,
  "lök gul": 4666,
  "ananas ST": 4029,

  "apelsiver lsv": 4389,
  "Aubergine ST": 3079,
  "Avocado Normal ST": 4046,
  "Blomkol KG": 4569,
  "blomkol krav KG": 94569,
  Clementiner: 4450,
  "Citron st": 2958,
  "Citron st krav": 92958,
  "Dill knippa": 4892,
  "Granatäpple KG": 4446,
  fänkål: 3171,
  "Grapefrukt röd ST": 3031,
  "Gräslök knippa": 4888,
  "Gurka svensk": 4268,
  "Gurka ST": 2998,
  "Ingefära KG": 4612,
  "kiwi grön eko st": 94030,
  "Kiwi grön ST": 4030,
  "kålrot krav KG": 94747,
  "Kålrot KG": 4747,
  "Lime ST": 2948,
  "Lök röd KG": 4082,
  "Salladslök ST": 4068,
  "Vitlök KG": 4608,
  "morötter KG": 4562,
  "majs st": 4078,
  "Mango krav ST": 94313,
  "mango ST": 4313,
  "melon Galia COOP KG": 4326,
  "Melon Galia KG": 4329,
};


//html-element
const startButton =document.querySelector("#start-knapp")
const pluKnapp = document.querySelector("#visa-plu");
const inputField = document.getElementById("input");
const nuvarandeStreaks = document.querySelector("#nuvarande-streak-värde")
const eld = document.querySelector("#fire");
const eldRäknare = document.querySelector("#fire-number");


//lagrar avklarade Plu-korder från varukorg.
const avklarade = [];

function updateStreak () {  
eldRäknare.innerHTML = avklarade.length; 
}

 



function displayVara() {
  const valdVara = document.querySelector("#product");
  valdVara.innerHTML = produkt;
}


function getRandomVara() {  
  
  const index = Object.keys(pluKoder);
  produkt = [index[Math.floor(Math.random() * index.length)]];
  avklarade.push(pluKoder[produkt]);
  pluKnapp.addEventListener("click", () => {
    inputField.value = pluKoder[produkt];
    avklarade.pop(); 
    updateStreak(); 
  
});
  displayVara(produkt);
}


// lyssnare för användare-input
const input = document.querySelector("#input");
input.addEventListener("keydown", function (e) {
PLU = document.getElementById("input");

  if (e.keyCode == 13) {
    checkPLU(PLU.value);
    PLU.value = "";
  }
});

//rättning med uppdateringar för varukorg.
function checkPLU(PLU) {
  
  const varaAttKolla = document.querySelector("#product").innerHTML;
  if (PLU == pluKoder[varaAttKolla]) {
    updateStreak()
    delete pluKoder[varaAttKolla];
    getRandomVara();
  } else {
    while(avklarade.length > 0) {
    avklarade.pop(); 
    updateStreak(); 
    }
  }
  
}
