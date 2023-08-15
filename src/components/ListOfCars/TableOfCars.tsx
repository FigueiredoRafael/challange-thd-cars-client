import axios from "axios";
import useRegisterModal from "../../hooks/useRegisterModal";
import Table from "../Table/Table";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

interface TableDataProps {
  title: string[];
}

const tableData: TableDataProps = {
  title: [
    "Make",
    "Model",
    "Package",
    "Color",
    "Year",
    "Category",
    "Mileage (mi)",
    "Price (cents)",
    "id",
  ],
};

const TableOfCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");
  const registerModal = useRegisterModal();

  useEffect(() => {
    // Create a cancel token source
    const source = axios.CancelToken.source();

    axios
      .get(`${apiUrl}cars`, { cancelToken: source.token })
      .then((response) => {
        const data = response.data;
        console.log("data: ", data);
        if (!data.success) {
          setError("An error occurred while fetching data.");
        } else if (data.data && data.data.length) {
          const carData = data.data.map((value) => ({
            make: value.make,
            model: value.model,
            package: value.package,
            color: value.color,
            year: value.year,
            category: value.category,
            mileage: value.mileage,
            price: value.price,
            id: value.id,
          }));
          setCars(carData);
        }
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          console.error("Error fetching data:", error);
        }
      });

    // Cleanup: cancel the request on component unmount
    return () => {
      source.cancel("Request canceled due to component unmount");
    };
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className='container mx-auto px-6 sm:px-8 py-10'>
          <div className='flex justify-end'>
            <button
              onClick={registerModal.onOpen}
              className='bg-gray-200 hover:bg-gray-300 transition ease-in-out delay-50 px-3 py-1 rounded-sm'
            >
              Add Car +
            </button>
          </div>
          <Table tableTitle='My Cars' title={tableData.title} content={cars} />
        </div>
      )}
    </>
  );
};

export default TableOfCars;
