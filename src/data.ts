import type { IProduct } from './types'
import { ref } from 'vue'

export const products = ref<IProduct[]>([
  {
    id: 1,
    name: 'Lionel Messi',
    description: 'Napastnik, znany ze swojej precyzji i dryblingu.',
    price: 140,
    img: '/src/assets/leo.webp',
  },
  {
    id: 5,
    name: 'Kylian Mbappé',
    description: 'Napastnik, z niebywałą szybkością i umiejętnościami technicznymi.',
    price: 125,
    img: '/src/assets/mbappe.webp',
  },
  {
    id: 3,
    name: 'Neymar Jr',
    description: 'Napastnik, znany ze swoich zwodów i kreatywności na boisku.',
    price: 100,
    img: '/src/assets/neymar.webp',
  },
  {
    id: 6,
    name: 'Mohamed Salah',
    description: 'Napastnik, o eksplozywnej szybkości i celnych strzałach.',
    price: 75,
    img: '/src/assets/salah.webp',
  },
  {
    id: 4,
    name: 'Robert Lewandowski',
    description: 'Napastnik, uznawany za jednego z najlepszych strzelców na świecie.',
    price: 95,
    img: '/src/assets/lewandowski.webp',
  },
  {
    id: 7,
    name: 'Harry Kane',
    description: 'Napastnik, znany z doskonałego wykończenia akcji i gry głową.',
    price: 90,
    img: '/src/assets/kane.webp',
  },
  {
    id: 10,
    name: 'Manuel Neuer',
    description: 'Bramkarz, uznawany za jednego z najlepszych bramkarzy na świecie.',
    price: 105,
    img: '/src/assets/neuer.webp',
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    description: 'Napastnik, znany ze swojej siły fizycznej i skuteczności w strzałach.',
    price: 130,
    img: '/src/assets/ronaldo.webp',
  },
  {
    id: 8,
    name: 'Erling Haaland',
    description: 'Napastnik, mistrz gry w polu karnym z niesamowitą szybkością oraz strzałem',
    price: 135,
    img: '/src/assets/haaland.webp',
  },
  {
    id: 9,
    name: 'Luka Modrić',
    description: 'Pomocnik, mistrz taktyki i precyzji w podaniach.',
    price: 85,
    img: '/src/assets/modric.webp',
  },
  {
    id: 11,
    name: 'Jan Oblak',
    description: 'Bramkarz, o niezwykłych refleksach i umiejętnościach interwencji.',
    price: 100,
    img: '/src/assets/oblak.webp',
  },
  {
    id: 12,
    name: 'Kevin De Bruyne',
    description: 'Pomocnik, znany z precyzyjnych podań i zdolności do strzelania z dystansu.',
    price: 110,
    img: '/src/assets/bruyne.webp',
  },
])
