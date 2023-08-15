import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
const apiUrl = import.meta.env.VITE_API_URL;

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [car, setCar] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const carTest = {
    make: "FORD",
    model: "f1",
    package: "Base",
    color: "Silver",
    category: "Truck",
    mileage: 231.23,
    price: 39799.23,
    year: 2010,
    id: "64db6f40c836ac02a7c9f6a0",
  };

  useEffect(() => {
    // Create a cancel token source
    const source = axios.CancelToken.source();

    axios
      .get(`${apiUrl}cars/${id}`, { cancelToken: source.token })
      .then((response) => {
        const data = response.data;
        if (!data.success) {
          setError("An error occurred while fetching data.");
        } else if (data.data) {
          setCar(data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          console.error("Error fetching data:", error);
          setError("An error occurred while fetching data.");
          setLoading(false);
        }
      });

    // Cleanup: cancel the request on component unmount or when the dependency changes
    return () => {
      source.cancel(
        "Request canceled due to component unmount or dependency change"
      );
    };
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!car) {
  //   return <div>No data available.</div>;
  // }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full md:w-2/3 p-2'>
        <div className='bg-white shadow-lg hover:shadow-xl rounded-lg '>
          <div className='bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover'>
            <div className='text-right'>
              <button className='text-pink-500 hover:text-pink-600 p-2 rounded-full'>
                <svg className='w-6 h-6' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex justify-between items-start px-2 pt-2 flex-wrap'>
            <div className='w-full md:w-1/3'>
              <div className='p-2 flex-grow'>
                <h1 className='font-medium text-xl font-poppins'>
                  Make: {carTest.make}
                </h1>
                <p className='text-gray-500 font-nunito'>Model: {carTest.model}</p>
                <p className='text-gray-500 font-nunito'>
                  Package: {carTest.package}
                </p>
                <p className='text-gray-500 font-nunito'>Color: {carTest.color}</p>
              </div>
            </div>
            <div className='w-full md:w-1/3'>
              <div className='p-2 flex-grow'>
                <p className='text-gray-500 font-nunito'>
                  Category: {carTest.category}
                </p>
                <p className='text-gray-500 font-nunito'>
                  Mileage: {carTest.mileage}
                </p>
                <p className='text-gray-500 font-nunito'>Year: {carTest.year}</p>
                <p className='text-gray-500 font-nunito'>ID: {carTest.id}</p>
              </div>
            </div>
            <div className='p-2 md:text-right w-full md:w-1/3'>
              <div className='text-teal-500 font-semibold text-lg font-poppins'>
                ${carTest.price}
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center px-2 pb-2'>
            <div className='w-1/2 p-2'>
              <Link to='/'>
                <button className='block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium'>
                  {BsArrowReturnLeft}
                  Return
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
