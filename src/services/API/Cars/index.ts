import {cars} from '../../../seeds';
import {wait} from '../../../utils';

class CarsAPI {
  static getCars = async () => {
    const res = await wait(100, cars);

    return res;
  };
}

export default CarsAPI;
