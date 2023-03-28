import {useEffect, useState} from 'react';
import {ICar} from '../../../models/types';
import CarsAPI from '../../../services/API/Cars';

const useListItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [listItems, setListItems] = useState<ICar[]>([]);

  const fetchListItems = async (): Promise<any> => {
    try {
      const response = await CarsAPI.getCars();
      setListItems(response);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshListItems = async () => {
    setIsRefreshing(true);
    const storedItems = await fetchListItems();

    if (storedItems?.length) {
      setListItems(storedItems);
    }

    setIsRefreshing(false);
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
    isRefreshing,
    listItems,

    refreshListItems,
  };
};

export default useListItems;
