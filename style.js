
                    //récuperer le premier 


// (getElementById) constitue un moyen d'accéder à un élément spécifique.
const liste = document.getElementById('container');
console.log("premier H1 -> contenue "+container.firstElementChild.textContent);
//firstElementChild le premier élément enfant 
//textContent représente le contenu textuel



                    //premiere methode 

//querySelector retourne le premier Element 
const choixUn = document.querySelector('ul');
console.log('----------Récupére le HTML du premier <li> (3méthodes)--------------')
console.log("-----------------------------")
console.log(choixUn.firstElementChild.innerHTML);
//choixUn est ma variable 
//innerHTML affiche le code html


                        //deuxieme methode
                            
//querySelector retourne le premier Element du document 
var el = document.querySelector("li");
console.log(el.innerHTML);


                        //troisiéme methode

var ol = document.body.querySelector("li");
console.log(ol.innerHTML);



                        //last <li>
const liDernier = document.querySelector('ul');
console.log('----------Récupére le HTML du dernier <li> --------------')
console.log("-----------------------------")
console.log(liDernier.lastElementChild.innerHTML);


                    // récupérer le html du troisieme <li>
console.log('----------Récupére le HTML du troisieme  <li> --------------')   

console.log("nombre total de LI 4")   
console.log('troisieme LI:'+choixUn.children[2].innerHTML)


                                //<ul>

//getElementById constituent un moyen utile d'accéder rapidement à un élément spécifique.
const menubis = document.getElementById("menu")
console.log('----------Récupére le HTML du parent de <ul> --------------')  
console.log("-----------------------------")
console.log('HTML du parent de <ul>:')  

console.log(menu.innerHTML)

console.log('----------Récupére le HTML du parent du quatrième <li> --------------')  
console.log("-----------------------------")
console.log('nbre total de li 4')
console.log("troisième LI: choix <span>4</span> ")
console.log('HTML du parent du quatrième <li>')

                                {/* <li>

querySelectorAll  renvoie une List des éléments du document qui correspondent 
au groupe de sélecteurs. */}
const menubiss = document.querySelectorAll("li")
console.log(choixUn.innerHTML)


                                //survol//

// addEventListerner etst une fonction à appeler chaque fois que l'évènement spécifié 
//est envoyé à la cible.
//L'interface Event représente un événement qui a lieu dans le dom.
menu.addEventListener("mouseenter", function (event) {
    //mouseenter  dispositif de pointage  du curseur sur l'élément.
    // on met l'accent sur la cible de mouseenter

    event.target.style.color = "red";
}, false);



menu.addEventListener("mouseleave", function( event ) {
    
    event.target.style.color = "black";})
    //mouseleave  lorsque le curseur se déplace en dehors de cet élément.