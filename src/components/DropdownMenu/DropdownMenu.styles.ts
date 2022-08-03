import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  padding: 0.25rem;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;