let parseStringToBook = (inputString) => {
    const lines = inputString.split(";").filter(line => line.trim().length > 0);
    const jsonOutput = [];
    for (const line of lines) {
        const sizeMatch = line.match(/size=(\d+)/);
        const positionMatch = line.match(/order=(\d+)/);
        const nameMatch = line.match(/private (\w+) (\w+)/);
    
        if (sizeMatch && positionMatch && nameMatch) {
          const size = parseInt(sizeMatch[1]);
          const position = parseInt(positionMatch[1]);
          const type = nameMatch[1];
          const name = nameMatch[2];
    
          jsonOutput.push({
            name,
            size,
            position,
            //type,
          });
        }
      }
  
return jsonOutput;
}
  
let adicionarEvento = (event,element,action) => {
    element.addEventListener(event, action);
    element.dispatchEvent(new CustomEvent(event));
} 

let createBookAcao = () => {
    const jsonOutput = parseStringToBook(document.querySelector('.inputBook').value);
    console.log(jsonOutput);
    document.querySelector('.outputBook').innerHTML = JSON.stringify(jsonOutput, null, 2);;
}

window.addEventListener("load", (event) => {
    adicionarEvento('click',document.querySelector('.transformarBotao'),createBookAcao);
});