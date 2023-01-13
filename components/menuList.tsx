import { List, ListItem, LinkBox, ListIcon } from "@chakra-ui/layout";
import NextLink from "next/link";

interface MenuItem {
  name: string;
  icon: any;
  route: string;
}

interface MenuListProps {
  menuItems: Array<MenuItem>;
}

const MenuList = ({ menuItems }: MenuListProps) => (
  <List spacing={2}>
    {menuItems.map((menu) => (
      <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
        <LinkBox>
          {/* This NextLink triggers a client render so it doesnt refreshes the page and the music keeps playing, as it if were with server side rendering it would not. Also the passHref pass the href to its child component. */}
          <NextLink href={menu.route}>
            <ListIcon as={menu.icon} color="white" marginRight="20px" />
            {menu.name}
          </NextLink>
        </LinkBox>
      </ListItem>
    ))}
  </List>
);

export default MenuList;
