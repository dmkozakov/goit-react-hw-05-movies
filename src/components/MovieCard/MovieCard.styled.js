import styled from '@emotion/styled';
import { FiArrowLeft } from 'react-icons/fi';

export const ArrowIcon = styled(FiArrowLeft)`
  margin-right: 12px;
  width: 24px;
  height: 16px;
`;

export const ArrowBackWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 20px;

  &:hover {
    color: orangered;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 24px;

  font-size: 18px;
`;

export const AdditionalInfoLink = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;

  color: orangered;
  text-decoration: underline;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    align-items: start;
    display: flex;
    gap: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
