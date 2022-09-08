import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container";

export const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <Container>
        <Flex px={2} py={2} width="100%" alignItems="center">
          <Image size={30} src="/logo.svg" />
          <StyledLink as={Link} variant="nav" to="/">
            React Query CRUD
          </StyledLink>
          <Box mx="auto" />
          <StyledLink as={Link} variant="nav" to="/create-book">
            + Add New Book
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};
