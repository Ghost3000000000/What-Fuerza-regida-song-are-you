let button = document.querySelector(".submit");
let fullParagraph = document.querySelector(".result");

button.onclick = function() {
    fullParagraph.style.display = "block";
    let animal = document.querySelector(".music").value;
    let insideout = document.querySelector(".earth").value;
    if (animal === "Sabor Fresa" && insideout === "Barbie" ) {
         fullParagraph.innerHTML = "your song is Sabor Fresa";
    } else if (animal === "Sabor fresa" && insideout === "Oye") {
        fullParagraph.innerHTML = "your song is Barbie ";
    }
    if (animal === "harley queen" && insideout ===  "oye" ) {
         fullParagraph.innerHTML = "your song is sabor fresa";
        console.log("hi");
    } else if (animal === "sabor fresa" && insideout === "oye" ) {
    // let animal = document.querySelector(".animal").value;
    fullParagraph.innerHTML = "your song is Barbie";
        fullParagraph.innerHTML = "your song is sabor fresa";
         fullParagraph.innerHTML = "your song is oye";
    }
};