type ServicesTypes =
  | 'fuel'
  | 'maintenance'
  | 'gasStation'
  | 'parking'
  | 'fines';

export interface IService {
  id: number;
  title: string;
  subTitle?: string;
  serviceType?: ServicesTypes;
  price: string;
  priceComment?: string;
}

export interface ICar {
  id: number;
  model: string;
  subscriptionTillDate: string;
  licensePlateNumber: string;
  address: string;
  currency: string;
  services: IService[];
}
