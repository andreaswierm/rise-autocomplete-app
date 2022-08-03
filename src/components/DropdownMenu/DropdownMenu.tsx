import { Container, List } from "./DropdownMenu.styles";
import { DropdownMenuComponent } from "./DropdownMenu.types";

export const DropdownMenu: DropdownMenuComponent = ({
  isOpen,
  children,
  items,
  renderItem,
}) => {
  return (
    <Container>
      {children}

      {isOpen && !!items.length && <List>{items.map(renderItem)}</List>}
    </Container>
  );
};
