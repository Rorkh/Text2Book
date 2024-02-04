import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Debug from './pages/Debug.tsx';
import Error from './pages/Error.tsx';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='/debug' element={<Debug />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
