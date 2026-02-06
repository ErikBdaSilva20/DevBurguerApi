import { createBrowserRouter } from 'react-router-dom';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  NotFoundPage,
  Register,
} from '../pages';
export const router = createBrowserRouter([
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/complete',
    element: <CompletePayment />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
