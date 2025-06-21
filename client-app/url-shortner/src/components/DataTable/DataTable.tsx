import * as React from 'react';
import type { Urldata } from '../../interface/Urldata';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../../helpers/constant';

interface IDataTableProps {
  data: Urldata[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({ data }) => {
  const copyToClipboard = async (url: string) => {
    const fullUrl = `${serverUrl}/shorturl/${url}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert(`URL copied: ${fullUrl}`);
    } catch (error) {
      console.error(error);
    }
  };
const deleteUrl = async (id: string) => {
  try {
    await axios.delete(`${serverUrl}/shorturl/${id}`);
    alert("Deleted Successfully");
    window.location.reload(); 
  } catch (error) {
    console.error("Delete error:", error);
    alert("Error deleting URL");
  }
};

  const renderTableData = () => {
    return data.map((item) => (
      <tr
        key={item._id}
        className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
      >
        <td className="px-6 py-3 break-words">
          <Link to={item.fullurl} target="_blank" rel="noreferrer noopener">
            {item.fullurl}
          </Link>
        </td>
        <td className="px-6 py-3">
          <Link
            to={`${serverUrl}/shorturl/${item.shorturl}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.shorturl}
          </Link>
        </td>
        <td className="px-6 py-3">{item.clicks}</td>
        <td className="px-6 py-3 flex">
          <div
            className="cursor-pointer px-2"
            onClick={() => copyToClipboard(item.shorturl)}
          >
            📋
          </div>
          <div
            className="cursor-pointer px-2"
            onClick={() => deleteUrl(item._id)}
          >
            🗑️
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left text-gray-500">
          <thead className="text-md uppercase text-gray-50 bg-gray-700">
            <tr>
              <th className="px-6 py-3 w-6/12">Full URL</th>
              <th className="px-6 py-3 w-3/12">Short URL</th>
              <th className="px-6 py-3">Clicks</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
