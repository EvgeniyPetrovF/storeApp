import {ICar} from '../models/types';

export const cars: ICar[] = [
  {
    id: 0,
    model: 'Genesis G70',
    subscriptionTillDate: '2022-07-14',
    licensePlateNumber: 'K 332 MB 777',
    street: 'ул. Рубинштейна',
    house: '22к4',
    currency: '₽',
    services: [
      {
        id: 0,
        title: 'Заправить',
        subTitle: 'АИ-95',
        serviceType: 'fuel',
        price: '3325',
        priceComment: '~45 мин',
        amountOfFuel: 20,
        fuelCapacity: 80,
      },
      {
        id: 1,
        title: 'Техобслуживание',
        serviceType: 'maintenance',
        price: '27200',
        items: ['Масло ДВС', 'фильтры'],
        priceComment: '~6 ч',
      },
      {
        id: 2,
        title: 'Штрафы',
        subTitle: '4 новых',
        serviceType: 'fines',
        price: '5200',
        priceComment: 'Всего',
      },
      {
        id: 3,
        title: 'Паркинг',
        subTitle: '№ 1119',
        serviceType: 'parking',
        price: '800',
        priceComment: 'Всего',
      },
      {
        id: 4,
        title: 'АЗС',
        subTitle: '1.6 км',
        serviceType: 'gasStation',
        price: '49',
        priceComment: '1л АИ-95',
      },
    ],
  },
  {
    id: 1,
    model: 'Nissan Skyline R34',
    subscriptionTillDate: '2022-10-11',
    licensePlateNumber: 'K 456 MB 123',
    street: 'ул. Рубинштейна',
    house: '22к4',
    currency: '₽',
    services: [
      {
        id: 0,
        title: 'Заправить',
        subTitle: 'АИ-95',
        serviceType: 'fuel',
        price: '1234',
        priceComment: '~34 мин',
        amountOfFuel: 30,
        fuelCapacity: 110,
      },
      {
        id: 1,
        title: 'Техобслуживание',
        serviceType: 'maintenance',
        price: '55666',
        items: ['Гидравлический фазоинвертор', 'циклический прото-излучатель'],
        priceComment: '~6 ч',
      },
      {
        id: 2,
        title: 'Штрафы',
        subTitle: '4 новых',
        serviceType: 'fines',
        price: '5200',
        priceComment: 'Всего',
      },
      {
        id: 3,
        title: 'Паркинг',
        subTitle: '№ 1119',
        serviceType: 'parking',
        price: '800',
        priceComment: 'Всего',
      },
      {
        id: 4,
        title: 'АЗС',
        subTitle: '№ 555',
        serviceType: 'gasStation',
        price: '49',
        priceComment: '1л АИ-95',
      },
    ],
  },
  {
    id: 2,
    model: 'Chevrolet Corvette',
    subscriptionTillDate: '2022-10-11',
    licensePlateNumber: 'K 456 MB 123',
    street: 'ул. Рубинштейна',
    house: '22к4',
    currency: '₽',
    services: [
      {
        id: 0,
        title: 'Заправить',
        subTitle: 'АИ-95',
        serviceType: 'fuel',
        price: '1234',
        priceComment: '~34 мин',
        amountOfFuel: 50,
        fuelCapacity: 80,
      },
      {
        id: 1,
        title: 'Техобслуживание',
        serviceType: 'maintenance',
        price: '55666',
        items: ['Карбюратор', 'Моногидратор'],
        priceComment: '~6 ч',
      },
      {
        id: 2,
        title: 'Штрафы',
        subTitle: '4 новых',
        serviceType: 'fines',
        price: '5200',
        priceComment: 'Всего',
      },
      {
        id: 3,
        title: 'Паркинг',
        subTitle: '№ 1119',
        serviceType: 'parking',
        price: '800',
        priceComment: 'Всего',
      },
      {
        id: 4,
        title: 'АЗС',
        subTitle: '№ 555',
        serviceType: 'gasStation',
        price: '49',
        priceComment: '1л АИ-95',
      },
    ],
  },
  {
    id: 3,
    model: 'Porsche Carrera GT',
    subscriptionTillDate: '2022-05-01',
    licensePlateNumber: 'K 456 MB 123',
    street: 'ул. Мира',
    house: '12',
    currency: '₽',
    services: [
      {
        id: 0,
        title: 'Заправить',
        subTitle: 'АИ-95',
        serviceType: 'fuel',
        price: '1234',
        priceComment: '~34 мин',
        amountOfFuel: 70,
        fuelCapacity: 80,
      },
      {
        id: 1,
        title: 'Техобслуживание',
        serviceType: 'maintenance',
        price: '55666',
        items: ['Иконы', 'четки на удачу'],
        priceComment: '~6 ч',
      },
      {
        id: 2,
        title: 'Штрафы',
        subTitle: '3 новых',
        serviceType: 'fines',
        price: '3333',
        priceComment: 'Всего',
      },
      {
        id: 3,
        title: 'Паркинг',
        subTitle: '№ 6546',
        serviceType: 'parking',
        price: '800',
        priceComment: 'Всего',
      },
      {
        id: 4,
        title: 'АЗС',
        subTitle: '№ 432',
        serviceType: 'gasStation',
        price: '49',
        priceComment: '1л АИ-95',
      },
    ],
  },
  {
    id: 4,
    model: 'Mazda RX-7',
    subscriptionTillDate: '2022-10-11',
    licensePlateNumber: 'K 456 MB 123',
    street: 'ул. Пушкина',
    house: 'Колотушкина',
    currency: '₽',
    services: [
      {
        id: 0,
        title: 'Заправить',
        subTitle: 'АИ-92',
        serviceType: 'fuel',
        price: '1234',
        priceComment: '~34 мин',
        amountOfFuel: 10,
        fuelCapacity: 80,
      },
      {
        id: 1,
        title: 'Техобслуживание',
        serviceType: 'maintenance',
        price: '75757',
        items: ['Гидравлический фазоинвертор', 'циклический прото-излучатель'],
        priceComment: '~6 ч',
      },
      {
        id: 2,
        title: 'Штрафы',
        subTitle: '6 новых',
        serviceType: 'fines',
        price: '6600',
        priceComment: 'Всего',
      },
      {
        id: 3,
        title: 'Паркинг',
        subTitle: '№ 233',
        serviceType: 'parking',
        price: '800',
        priceComment: 'Всего',
      },
      {
        id: 4,
        title: 'АЗС',
        subTitle: '№ 123',
        serviceType: 'gasStation',
        price: '33',
        priceComment: '1л АИ-92',
      },
    ],
  },
];