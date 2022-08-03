import { FC, PropsWithChildren } from "react";
import { Container, SidebarContainer } from "./Scaffold.styles";

export const Scaffold: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <SidebarContainer>{children}</SidebarContainer>
  </Container>
);
