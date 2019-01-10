// IIFE -> Immediately Invoked Function Expression
// Essa função é invocada imediatamente com a execussão do script
// É uma alternativa para fugir do escopo global

(function () {
    console.log("Será executado na hora!");
    console.log("Foge do escopo mais abrangente");
})();