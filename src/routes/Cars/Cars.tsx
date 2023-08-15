// Cars.tsx
import React from "react";
import RegisterModal from "../../components/Modal/RegisterModal";
import TableOfCars from "../../components/ListOfCars/TableOfCars";

const Cars: React.FC = () => {
  return (
    <>
      <RegisterModal />
      <TableOfCars />
    </>
  );
};

export default Cars;
