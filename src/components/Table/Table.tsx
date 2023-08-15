import React from "react";
import { CarContentProps } from "../../types";

interface TableProps {
  title: string[];
  content: CarContentProps[];
}

const Table: React.FC<TableProps> = ({ title, content }) => {
  const renderTitles = () => {
    return (
      <thead>
        <tr>
          {title.map((title) => (
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              {title}
            </th>
          ))}
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'></th>
        </tr>
      </thead>
    );
  };

  const renderContent = () => {
    return (
      <tbody>
        {content.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, subIndex) => (
              <td
                key={subIndex}
                className='px-5 py-5 border-b border-gray-200 bg-white text-sm'
              >
                <div className='flex'>
                  <p className='text-gray-900 whitespace-no-wrap'>{value}</p>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div>
          <h2 className='text-2xl font-semibold leading-tight'>My Cars</h2>
        </div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              {renderTitles()}
              {renderContent()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;