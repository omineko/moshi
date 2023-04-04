import asteroids from '../assets/bg/asteroids.jpg';
import cuadros from '../assets/bg/cuadros.png';
import fancyPants from '../assets/bg/fancy-pants.jpg';
import junkMail from '../assets/bg/junk-mail.jpg';
import ocean from '../assets/bg/ocean.jpg';
import science from '../assets/bg/science.png';
import shatteredIsland from '../assets/bg/shattered-island.gif';
import specialDelivery from '../assets/bg/special-delivery.jpg';
import subwayLines from '../assets/bg/subway-lines.png';

class BGImage {
  static genRand() {
    const images = [
      asteroids,
      cuadros,
      fancyPants,
      junkMail,
      ocean,
      science,
      shatteredIsland,
      specialDelivery,
      subwayLines,
    ];

    return images[Math.floor(Math.random() * (images.length - 1))];
  }
}

export default BGImage;
