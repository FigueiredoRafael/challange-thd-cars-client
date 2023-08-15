// CarDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>View details for Car ID: {id}</div>;
};

export default CarDetails;