
function displayPoem(response) {
    let poemElement = document.querySelector("#poem");
    new Typewriter(poemElement, {
        strings: response.data.answer, 
        autoStart: true,
        delay: 100, 
        cursor: ""
    }).start(); 
}

function generatorPoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = 'f9b4d69b4d22303f3t650a59od86ede0'; 
    let prompt = `generate the best English poem about element of nature ${instructionsInput.value}`; 
    let context = "User instructions: you are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in html.No title. Sign in the poem with 'SheCode AI'and it shoud write in bold style" ;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
    axios.get(apiUrl).then(displayPoem);

    let poemElement=document.querySelector("#poem");
    poemElement.classList.remove("poem-hidden");
    poemElement.innerHTML =`Generating a English poem about ${instructionsInput.value}`;

   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatorPoem);


