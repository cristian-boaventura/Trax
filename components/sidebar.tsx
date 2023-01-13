import NextImage from "next/image";
import { Box, Divider, LinkBox, List, ListItem } from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextLink from "next/link";
import MenuList from "./menuList";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Your Library", icon: MdLibraryMusic, route: "/library" },
];

const musicMenu = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdFavorite, route: "/favorites" },
];

const playLists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box paddingY="20px" height="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
        <NextImage
          src="/logo.svg"
          height={60}
          width={120}
          priority
          alt="Trax logo"
        />
      </Box>
      <Box marginBottom="20px">
        <MenuList menuItems={navMenu} />
      </Box>
      <Box marginY="20px">
        <MenuList menuItems={musicMenu} />
      </Box>
      <Divider color="gray.800" />
      <Box height="45%" overflowY="auto" paddingY="20px">
        <List spacing={2}>
          {playLists.map((playlist) => (
            <ListItem fontSize="16px" key={playlist}>
              <LinkBox>
                <NextLink href="/">{playlist}</NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
