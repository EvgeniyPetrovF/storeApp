import {useEffect, useState} from 'react';

const useListItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [listItems, setListItems] = useState<any[]>([]);

  const fetchListItems = async (): Promise<any> => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const refreshDryCleaners = async () => {
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
    dryCleaners: listItems,

    refreshDryCleaners,
  };
};

export default useListItems;
