let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let myP
days.forEach((day, i) => {
    myP = document.createElement(`p`);
    myP.innerText = day;
    if (i>4) {
        myP.style.fontWeight = `bold`;
    }
    myBody.appendChild(myP);
});