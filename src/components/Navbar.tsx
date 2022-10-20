import { Button, IconButton } from "@chakra-ui/button";
import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "./Link";
import paths from "../paths";
import { useAuthActions } from "../features/auth/AuthContextProvider";

type NavbarProps = {
  onOpen: () => void;
};

function Navbar({ onOpen }: NavbarProps) {
  const { logout } = useAuthActions();

  return (
    <Box borderBottom="1px solid " borderColor="gray.200" py={3}>
      <Container maxW="container.2xl">
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <IconButton
              aria-label="Main Drawer"
              onClick={onOpen}
              icon={<AiOutlineMenu />}
              display={["inherit", "inherit", "none", "none"]}
            />
            <Link to={paths.home}>
              <Heading ml={2} as="h6" fontSize="2xl">
                Vaccine Management
              </Heading>
            </Link>
            <Button ml="4" onClick={logout}>
              Log Out
            </Button>
          </Flex>
          <Flex align="center" flexGrow="0">
            <Flex display={["none", "none", "block"]}>
              <Link to={paths.vaccine} ml={4}>
                Vaccine
              </Link>
              <Link to={paths.createVaccine} ml={4}>
                Create Vaccine
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;