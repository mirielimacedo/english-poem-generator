

function generatorPoem(event){
event.preventDefault();


  new Typewriter("#poem", {
    strings: "Golden Slumbers",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}


 
let poemFormElement =  document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit',generatorPoem);