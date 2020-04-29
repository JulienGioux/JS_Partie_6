let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let myP
days.forEach(element => {
    myP = document.createElement(`p`);
    myP.innerText = element;
    if (element === `Samedi` || element === `Dimanche`) {
        myP.style.fontWeight = `bold`;
    }
    myBody.appendChild(myP);
});