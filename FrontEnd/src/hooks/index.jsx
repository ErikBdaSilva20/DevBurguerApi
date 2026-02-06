import { CartProvider } from './CartContext.jsx';
import { UserProvider } from './userContext.jsx';

const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);

export default AppProvider;
