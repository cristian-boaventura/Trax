import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
import Sidebar from "./sidebar";

type PlayerLayoutProps = {
  children: ReactNode;
};

const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        width="250px"
        left="0"
        height="calc(100vh - 100px)"
        bg="black"
        color="gray"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
