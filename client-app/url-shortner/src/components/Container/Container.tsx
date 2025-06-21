import * as React from 'react';
import Formcontainer from '../Formcontainer/Formcontainer';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';
import type { Urldata } from '../../interface/Urldata';
import { serverUrl } from '../../helpers/constant';

interface IContainerProps {
    title: string;
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<Urldata[]>([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/shorturl`);
      console.log("The response from server is:", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <>
      <Formcontainer title={''} />
      <DataTable data={data} />
    </>
  );
};

export default Container;
