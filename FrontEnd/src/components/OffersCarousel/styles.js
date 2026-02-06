import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;
  overflow: hidden;
  margin-top: 150px;

  .react-multi-carousel-list {
    overflow: hidden;
  }

  .carousel-item {
    padding: 0 10px;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
  color: #ffc400;
  margin-bottom: 40px;
  position: relative;
  font-family: 'road rage', sans-serif;

  span {
    font-weight: 700;
    color: #ffffff;
    font-family: 'road rage', sans-serif;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #ffc400;
    border-radius: 2px;
  }
`;
