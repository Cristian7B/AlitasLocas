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
    description: "Disfruta seis alitas con tu salsa favorita, acompañadas de papas o yuca y una bebida bien fría para un antojo irresistible.",
    image: soloParaTiImg,
    category: "S",
    buttonText: "Comprar",
    imageHeight: 120 
  },
  {
    id: 2,
    title: "Duo Delivery",
    description: "Comparte doce alitas con hasta dos sabores distintos, dos acompañantes medianos y bebidas individuales.",
    image: duoDeliveryImg,
    category: "M",
    buttonText: "Comprar",
    imageHeight: 140
  },
  {
    id: 3,
    title: "En familia",
    description: "Veinte alitas jugosas con tres sabores a elección, dos acompañantes grandes y una bebida de 1.5 L.",
    image: familiarImg,
    category: "G",
    buttonText: "Comprar",
    imageHeight: 180 
  },
  {
    id: 4,
    title: "En la oficina",
    description: "Cincuenta alitas irresistibles con cinco sabores, cinco acompañantes grandes y bebidas o cervezas.",
    image: oficinaImg,
    category: "B",
    buttonText: "Comprar",
    imageHeight: 150
  },
  {
    id: 5,
    title: "Parranda en casa",
    description: "Treinta alitas llenas de sabor con hasta cuatro combinaciones, tres acompañantes grandes y una bebida 3 L o cervezas.",
    image: parrandaImg,
    category: "B",
    buttonText: "Comprar",
    imageHeight: 170
  },
  {
    id: 6,
    title: "Adiciones",
    description: "Completa tu experiencia con papas, yuca, arepitas, salsas extra o bebidas frías que realzan cada bocado de tus alitas.",
    image: papasImg,
    category: "A",
    buttonText: "Comprar",
    imageHeight: 100
  }
];
