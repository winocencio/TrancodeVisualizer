



let trancodeInJson = convertTrancodeInJson(BOOK_01.examples[0],BOOK_01)
console.log(trancodeInJson);

let table = buildTable(getHeaderArray(trancodeInJson),getObjValueArray(trancodeInJson));

console.log(table);
document.querySelector('.tableLocation').appendChild(table);