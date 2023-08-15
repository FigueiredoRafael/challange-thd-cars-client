import Table from "../Table/Table";
import { CarContentProps } from "../../types";

interface TableDataProps {
  title: string[];
  content: CarContentProps[];
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
  content: [
    {
      make: "FORD",
      model: "f1",
      package: "Base",
      color: "Silver",
      category: "Truck",
      mileage: 231.23,
      price: 39799.23,
      year: 2010,
      id: "64db6f40c836ac02a7c9f6a0"
    }
  ],
};

const TableOfCars = () => {
  return <Table title={tableData.title} content={tableData.content} />;
};

export default TableOfCars;
