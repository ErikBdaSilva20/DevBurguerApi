import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardProduct } from '../../components/CardProduct';
import api from '../../services/api';
import { Banner, CategorieButton, CategoriesMenu, Container, ProductsContainer } from './styles';

export function Menu() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 🔑 categoria ativa SEMPRE string
  const [activeCategory, setActiveCategory] = useState('0');

  // carregar categorias e produtos
  useEffect(() => {
    async function loadData() {
      const [{ data: categoriesData }, { data: productsData }] = await Promise.all([
        api.get('/categories'),
        api.get('/products'),
      ]);

      setCategories([{ id: '0', name: 'Todas' }, ...categoriesData]);
      setProducts(productsData);
      setFilteredProducts(productsData); // mostra tudo inicialmente
    }

    loadData();
  }, []);

  // ler categoria da URL
  useEffect(() => {
    const params = new URLSearchParams(search);
    setActiveCategory(params.get('categoria') || '0');
  }, [search]);

  // filtrar produtos
  useEffect(() => {
    if (activeCategory === '0') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category_id === activeCategory));
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <Banner>
        <div>
          <h1>APROVEITE!</h1>
          <span>Quem resiste a esse cardápio?</span>
        </div>

        <div>
          <h1>
            O MELHOR <br />
            HAMBURGER <br />
            E A MELHOR <br />
            CERVEJA ESTÃO AQUI!
          </h1>
        </div>
      </Banner>

      <CategoriesMenu>
        {categories.map((category) => (
          <CategorieButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() =>
              navigate(
                {
                  pathname: '/menu',
                  search: `?categoria=${category.id}`,
                },
                { replace: true }
              )
            }
          >
            {category.name}
          </CategorieButton>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
