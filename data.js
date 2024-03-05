export const catalog = {
  data: [
    {
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/759310c70ba2c697b93fe27f866b1323/2175345ce82b339090447d1ba41f7396d68e8ebc694caecb79f7544b0b372b19.png',
      name: 'Бытовая техника',
      url: '/catalog/appliance',
    },
    {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/146dec456b1912760da4581034a5bcf3/90c51a61886f58bae507cf8a31a78229dfed7c822e745989ad5748300299dc73.png',
      name: 'Красота и здоровье',
      url: '/catalog/beautyAndHealth',
    },
    {
      id: 3,
      img: 'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/5be81354477d5be09e72f6b8f01132d1/2aaaee8f9cf22a2eecd75ee28f9a88ec74ea03b26015438fb04590fd89d0da24.png',
      name: 'Смартфоны и фототехника',
      url: '/catalog/phonesAndPhotos',
    },
  ],
  breadcrumbs: [{ id: 1, title: 'Каталог', url: '/catalog' }],
}

export const categoryAppliance = {
  data: [
    {
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/9f2753b97e68615205894c71973c69ed/8c10bf0db3994c91d5290dabff81074b595135f7d61143c56f047107166b0e85.jpg',
      name: 'Варочные панели',
      url: '/catalog/hobs',
    },
    {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/c4b05178bf7107a01b33ad06427beb7b/56ecb6bcfdfdcbd377b077b1efd052e4a7fa96d86fb41bbf006659f492c54f94.jpg',
      name: 'Духовые шкафы',
      url: '/catalog/hobs',
    },
    {
      id: 3,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/04ff65d88a961c45afb3d7d64e8c20ef/4ee519300255743d16619d2a2f430939293d0d782438528fc10a459595f4f5e2.jpg',
      name: 'Вытяжки',
      url: '/catalog/hoods',
    },
  ],
  title: 'Бытовая техника',
  breadcrumbs: [{ id: 1, title: 'Бытовая техника', url: '/catalog/appliance' }],
}

export const categoryPhonesAndPhotos = {
  data: [
    {
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/b95522b7c0ee6db76477e7363198e8f1/0783e74f034efc05e9477339f0b48cf57c4266b04cc132f9d4ad4544974f4eed.jpg',
      name: 'Смартфоны и гаджеты',
      url: '/catalog/phonesAndPhotos',
    },
    {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/7bb44b6b3f22f660f4ce1786d2bb035a/3ab46d23e354637a932cc751423633739c54a6433d6d94780385328b7d3275f5.jpg',
      name: 'Планшеты',
      url: '/catalog/phonesAndPhotos',
    },
    {
      id: 3,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/6a52b0688b6b04847eac02c67dff8daf/9b9605234bbc4d1903d5a08882b3f277aeda448f18799520d092bbffc1c73ed3.jpg',
      name: 'Фототехника',
      url: '/catalog/phonesAndPhotos',
    },
  ],
  title: 'Смартфоны и фототехника',
}

export const categoryHobs = {
  data: [
    {
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/cfa3b09b1804a6b4d5d839c7da54a4b5/6624c4268a4266e86e73b190867b897717af0bf1b6e86f7a9d0fe803d40cdcda.png',
      name: 'Электрические варочные панели',
      url: '/category/electricHobs',
    },
    {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/91d423bca5a9aff1ac439e5cb2afc592/629fb37016879cc36966bf837f5648c71126e7313dfb0b601f6178c48be959a9.jpg',
      name: 'Индукционные варочные панели',
      url: '/category/electricHobs',
    },
  ],
  title: 'Варочные панели',
  breadcrumbs: [
    {
      id: 1,
      title: 'Бытовая техника',
      url: '/category/appliance',
    },
    {
      id: 2,
      title: 'Варочные панели',
      url: '/category/hobs',
    },
  ],
}

export const electricHobs = {
  data: [
    {
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/86163cd5127221af4281044a63b69065/d489c9311092ae6bbf46d114b5e308b5ccfca6f4901c39c246df62abe4e287c7.jpg.webp',
      title:
        'Электрическая варочная поверхность DEXP 4M2CTYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]',
      price: 6499,
      url: '/category/electricHobs/1',
      breadcrumbs: [
        {
          id: 1,
          title: 'Бытовая техника',
          url: '/catalog/appliance',
        },
        {
          id: 2,
          title: 'Варочные панели',
          url: '/catalog/hobs',
        },
        {
          id: 3,
          title: 'Электрические варочные панели',
          url: '/catalog/hobs',
        },
        {
          id: 4,
          title: 'Электрическая варочная поверхность DEXP 4M2CTYL/B',
          url: '/category/electricHobs/1',
        },
      ],
    },
    {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/2e99a32dafe0f971a6e19ac73702b42f/1aacada98e4e2197cf107582f232c40b8b3b3f8e6a3423546fe6bfdd1b313f90.jpg.webp',
      title:
        'Электрическая варочная поверхность DEXP EH-C2NSMA/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.3 кВт]',
      price: 6699,

      url: '/category/electricHobs/2',
    },
  ],
  title: 'Электрические варочные панели',
  breadcrumbs: [
    {
      id: 1,
      title: 'Бытовая техника',
      url: '/catalog/appliance',
    },
    {
      id: 2,
      title: 'Варочные панели',
      url: '/catalog/hobs',
    },
    {
      id: 3,
      title: 'Электрические варочные панели',
      url: '/catalog/hobs',
    },
  ],
}
