let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let myP
languages.forEach(element => {
    myP = document.createElement(`p`);
    myP.innerText = element;
    myBody.appendChild(myP);
});