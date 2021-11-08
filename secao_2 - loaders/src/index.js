import Title from './components/title';
import Image from './components/image';
import Button from './components/button';
import warning from './templates/warning.html';
import './styles/warning.css';
import frase from './files/frases.txt';
import descricao from './files/descircao.json';

const title = new Title();
const image = new Image();
const button = new Button();

title.create('Primeira página');
image.insertImage();
button.create();

// Babel spread
const obj = {a: 1, b: 2, c: 3, d: 4 };

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de HTML
const body = document.querySelector('body');
body.innerHTML += warning;

// arquivo de texto
const pharagraph = document.createElement('p');
pharagraph.innerText = frase;

body.appendChild(pharagraph);

// arquivo json
const pessoa = descricao;
console.log(pessoa);