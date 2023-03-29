import {cars} from '../../../seeds';
import {wait} from '../../../utils';

class CarsAPI {
  static getCars = async () => {
    const res = await wait(1000, cars);

    return res;
  };

  static getCarServices = async (id: number) => {
    const res = await wait(1000, cars[id].services);

    return res;
  };
}

export default CarsAPI;
