// Imports de imágenes para que Vite las procese correctamente
import soloParaTiImg from '../../../assets/Solo para ti.webp';
import duoDeliveryImg from '../../../assets/Duo delivery.webp';
import familiarImg from '../../../assets/Familiar en casa.webp';
import oficinaImg from '../../../assets/Oficina - Amigos.webp';
import parrandaImg from '../../../assets/Parranda en casa.webp';
import papasImg from '../../../assets/Papas.webp';

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

