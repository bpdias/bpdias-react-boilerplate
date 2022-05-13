import './App.scss';
import 'fontsource-roboto';
import { RouterConfig } from 'navigation/RouterConfig';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterConfig></RouterConfig>
      </BrowserRouter>
    </div>
  );
}

export default App;
