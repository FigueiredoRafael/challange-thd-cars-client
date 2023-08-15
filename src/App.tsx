import TableOfCars from "./components/ListOfCars/TableOfCars";
import RegisterModal from "./components/Modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

function App() {
  return (
    <>
      <ToasterProvider />
      <RegisterModal />
      <TableOfCars />
    </>
  );
}

export default App;
