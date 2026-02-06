import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js';
import { CategoryButton, Container, ContainerItems, GridSlide, Title } from './styles.js';

export function CategoriesCarousel() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const groupedCategories = chunkArray(categories, 4);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 0 }, items: 1 },
  };

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        autoPlaySpeed={3000}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {groupedCategories.map((group, index) => (
          <GridSlide key={index}>
            {group.map((category) => (
              <ContainerItems key={category.id} $imageurl={category.url}>
                <CategoryButton
                  onClick={() => {
                    navigate(
                      {
                        pathname: '/menu',
                        search: `?categoria=${category.id}`,
                      },
                      {
                        replace: true,
                      }
                    );
                  }}
                >
                  <p>{category.name}</p>
                </CategoryButton>
              </ContainerItems>
            ))}
          </GridSlide>
        ))}
      </Carousel>
    </Container>
  );
}
