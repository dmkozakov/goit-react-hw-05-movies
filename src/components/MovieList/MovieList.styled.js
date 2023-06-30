import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MovieListLink = styled(Link)`
  display: flex;
  gap: 12px;
`;

export const Img = styled.img`
  width: 185px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
