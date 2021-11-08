import devImg from '../img/dev3.jpg';

class Image {
  insertImage() {
    const img = document.createElement('img');

    img.src = devImg;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;