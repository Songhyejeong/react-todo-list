import styled from 'styled-components';
import colors from '../../color/color';

export const HeaderContainer = styled.header`
  width: 780px;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${colors.green};
`;

export const Title = styled.p`
  color: white;
  font-size: 1rem;
`;
