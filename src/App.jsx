import './App.css';
import Avion from './component/Avion';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"


export default function App() {
  const AppContainer = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  align-items:center;
  justify-content : center;
  background-color : grey;
  `;

  return (
    <div className="App">
      <AppContainer> Jet Sky </AppContainer>
      <Avion />
    </div>
  );
}