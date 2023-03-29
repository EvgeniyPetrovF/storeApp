import {useState} from 'react';
import useThrottle from '../../../common/hooks/useThrottle';
import {IService} from '../../../models/types';
import CarsAPI from '../../../services/API/Cars';

const refreshCooldownTime = 15000;

type Props = {
  services: IService[];
  carId: number;
};

const useServices = ({services, carId}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [servicesList, setServicesList] = useState(services);

  const fetchServices = async (id: number) => {
    try {
      const response = await CarsAPI.getCarServices(id);
      setServicesList(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const refreshServices = async () => {
    setIsRefreshing(true);
    const storedItems = await fetchServices(carId);

    if (storedItems?.length) {
      setServicesList(storedItems);
    }

    setIsRefreshing(false);
  };

  const throttledRefresh = useThrottle(refreshServices, refreshCooldownTime);

  return {
    isRefreshing,
    servicesList,
    refreshServices: throttledRefresh,
  };
};

export default useServices;
