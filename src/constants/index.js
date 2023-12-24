import fire from '@/src/static/icons/menu_icons/fire.svg'
import pizza from '@/src/static/icons/menu_icons/pizza.svg'
import sushi from '@/src/static/icons/menu_icons/sushi.svg'
import drinks from '@/src/static/icons/menu_icons/drinks.svg'
import snacks from '@/src/static/icons/menu_icons/snacks.svg'
import combos from '@/src/static/icons/menu_icons/combos.svg'
import desserts from '@/src/static/icons/menu_icons/desserts.svg'
import sauces from '@/src/static/icons/menu_icons/sauces.svg'
import combobanner from '@/src/static/banner/combobanner.jpg'
import pizzabanner from '@/src/static/banner/pizzabanner.jpg'

export const generalMenu = [
  {
    id: 1,
    name: "Акції",
    slug: "/sale",
  },

  {
    id: 2,
    name: "Про компанію",
    slug: "/sale",
  },

  {
    id: 3,
    name: "Політика Конфіденційності",
    slug: "/sale",
  },
  {
    id: 4,
    name: "Умови гарантії",
    slug: "/sale",
  },
  {
    id: 5,
    name: "Ресторан",
    slug: "/sale",
  },
  {
    id: 6,
    name: "Контакти",
    slug: "/sale",
  },
  {
    id: 7,
    name: "Підтримка",
    slug: "/sale",
  },
  {
    id:8,
    name: "Відстежити замовлення",
    slug: "/sale",
  },
];

export const categories = [
  { id:1,
    name: 'Акції',
    image: fire,
    slug: '/sales'
  },

  {id:2,
    name: 'Піца',
    image: pizza,
    slug: '/pizza'
  },

  {id:3,
    name: 'Суші',
    image:sushi,
    slug: '/sushi'
  },

  {id:4,
    name: 'Напої',
    image: drinks,
    slug: '/drinks'
  },

  {id:5,
    name: 'Закуски',
    image: snacks,
    slug: '/snacks'
  },

  {id:6,
    name: 'Комбо',
    image: combos,
    slug: '/combos'
  },

  {id:7,
    name: 'Десерти',
    image: desserts,
    slug: '/desserts'
  },

  {id:8,
    name: 'Соуси',
    image: sauces,
    slug: '/sauces'
  }
]

export const banners = [
  {
    id: 1,
    slug: '/sales',
    title: '3 середні піци по 169 грн',
    image: combobanner
  },

  {
    id: 2,
    slug: '/sales',
    title: 'Комбо меню по 300 грн',
    image: pizzabanner
  },

  {
    id: 3,
    slug: '/sales',
    title: '3 середні піци по 169 грн',
    image: combobanner
  },

  {
    id: 4,
    slug: '/sales',
    title: 'Комбо меню по 300 грн',
    image: pizzabanner
  },
  {
    id: 5,
    slug: '/sales',
    title: '3 середні піци по 169 грн',
    image: combobanner
  },

  {
    id: 6,
    slug: '/sales',
    title: 'Комбо меню по 300 грн',
    image: pizzabanner
  }]

