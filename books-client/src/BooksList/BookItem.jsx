import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import { ThreeDots } from "react-loader-spinner";

export const BookItem = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books"); //cache cleanup
  };
  return (
    <Flex p={3} width="100%" alignItems="center" justifyContent="center">
      <StyledLink as={Link} to={`/update-book/${id}`} mr="auto">
        {title}
      </StyledLink>
      <Text>{author}</Text>
      <Button ml="5" onClick={remove}>
        {isLoading ? <ThreeDots color="#fff" height={10} /> : "Remove"}
      </Button>
    </Flex>
  );
};
