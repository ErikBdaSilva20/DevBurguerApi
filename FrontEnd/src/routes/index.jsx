import { Route, Routes } from 'react-router-dom';

import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  Register,
  NotFoundPage,
  EditProduct,
  NewProduct,
  Orders,
  Products,
} from '../pages';

export function Router() {
  return (
    <Routes>
      {/* User */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="produtos" element={<Products />} />
        <Route path="adicionar-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="pedidos" element={<Orders />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      {/* Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
