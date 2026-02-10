import { useUser } from '../../hooks/userContext.jsx';
import { Banner, Container, Content, Main } from './styles.js';

import { CategoriesCarousel, OffersCarousel } from '../../components';

export function Home() {
  const { userInfo } = useUser();

  console.log(userInfo);

  return (
    <>
      <Main>
        <Banner>
          <h1>
            Seja bem-vindo(a)! <br />
          </h1>
          <p>Vai de podrão? ou de breja?</p>
        </Banner>

        <Container>
          <h1>Conheça nossos produtos! e boa compra!</h1>
          <Content>
            <CategoriesCarousel />
            <OffersCarousel />
          </Content>
        </Container>
      </Main>
    </>
  );
}
