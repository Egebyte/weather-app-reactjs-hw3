import "./App.css";
import { MainProvider } from "./context/MainContext";
import Container from "./components/Container/Container";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <MainProvider>
      <Container />
    </MainProvider>
  );
}

export default App;
