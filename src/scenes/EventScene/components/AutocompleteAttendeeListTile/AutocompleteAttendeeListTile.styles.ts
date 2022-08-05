import styled, { css } from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  ${({ isActive }) => css`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;

    ${isActive && "background-color: #F5F5F5;"}

    &:hover {
      background-color: #eeeeee;
    }
  `}
`;
