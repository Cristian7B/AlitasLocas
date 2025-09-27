// Imports de imágenes para que Vite las procese correctamente
import soloParaTiImg from '../../assets/images/Solo para ti.webp';
import duoDeliveryImg from '../../assets/images/Duo delivery.webp';
import familiarImg from '../../assets/images/Familiar en casa.webp';
import oficinaImg from '../../assets/images/Oficina - Amigos.webp';
import parrandaImg from '../../assets/images/Parranda en casa.webp';
import papasImg from '../../assets/images/Papas.webp';

export const products = [
  {
    id: 1,
    title: "Solo para ti",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: soloParaTiImg,
    category: "S",
    buttonText: "Comprar"
  },
  {
    id: 2,
    title: "Duo Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: duoDeliveryImg,
    category: "M",
    buttonText: "Comprar"
  },
  {
    id: 3,
    title: "En familia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: familiarImg,
    category: "G",
    buttonText: "Comprar"
  },
  {
    id: 4,
    title: "En la oficina",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: oficinaImg,
    category: "B",
    buttonText: "Comprar"
  },
  {
    id: 5,
    title: "Parranda en casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: parrandaImg,
    category: "B",
    buttonText: "Comprar"
  },
  {
    id: 6,
    title: "Adiciones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: papasImg,
    category: "A",
    buttonText: "Comprar"
  }
];

