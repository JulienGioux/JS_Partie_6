let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

languages.forEach(element => {
    let myP = document.createElement(`p`);
    myP.innerText = element;
    myBody.appendChild(myP);
});