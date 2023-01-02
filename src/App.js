
import { RouterProvider } from 'react-router-dom';
import './app.scss'
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Watch from './Pages/watch/Watch';
import router from './routes/router';
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
