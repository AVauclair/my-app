import './App.css';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Content from './Components/Content/Content.jsx';

function App() {
  return (
    <div className = "app-body">
      <Header/>
      <Navigation/>
      <Content/>
    </div>
  );
}

export default App;
