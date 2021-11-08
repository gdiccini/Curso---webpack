import './button.scss';

class Button {
  create() {
    const button = document.createElement('button');
    button.innerText = 'click-me';

    button.classList.add('btn');

    document.querySelector('body').appendChild(button);
  }
}

export default Button;
