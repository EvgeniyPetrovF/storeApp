import {useEffect, useState} from 'react';
import {ICar} from '../../../models/types';
import CarsAPI from '../../../services/API/Cars';

const useListItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listItems, setListItems] = useState<ICar[]>([]);

  const fetchListItems = async () => {
    try {
      const response = await CarsAPI.getCars();
      setListItems(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const initialFetchDryCleaners = async () => {
    setIsLoading(true);
    const storedItems = await fetchListItems();
    if (storedItems?.length) {
      setListItems(storedItems);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initialFetchDryCleaners();
  }, []);

  return {
    isLoading,
    listItems,
  };
};

export default useListItems;
