import { useUser } from '../../hooks/userContext.jsx';
import { Banner, Container, Content, Main } from './styles.js';

import { CategoriesCarousel, Header, OffersCarousel } from '../../components';

export function Home() {
  const { userInfo } = useUser();

  console.log(userInfo);

  return (
    <>
      <Header />
      <Main>
        <Banner>
          <h1>
            Seja bem-vindo(a)! <br />
            <p>Vai de podrão? ou de breja?</p>
          </h1>
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
