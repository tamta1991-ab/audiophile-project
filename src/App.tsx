import CartContextProvider from "./context/CartContext";
import "./css/App.css";
import "./css/modal.css";
import RoutesComponent from "./routes/Routes";

function App() {
  return (
    <>
      <CartContextProvider>
        <RoutesComponent />
      </CartContextProvider>
    </>
  );
}

export default App;