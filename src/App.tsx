import AppRoutes from '../AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
