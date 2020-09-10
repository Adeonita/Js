const container = document.querySelector('#container');
const element = 
[
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
];

for (let i = 0; i < element.length; i++){
   const tag =  document.createElement(element[i].tag);
   container.appendChild(tag);
   const content = tag.innerText = element[i].text;
}