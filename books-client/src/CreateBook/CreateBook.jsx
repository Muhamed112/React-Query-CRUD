import { BookForm, Container } from "../Shared";
import { Box, Heading } from "rebass/styled-components";
import { useMutation } from "react-query";
import { createBook } from "../api";
import { useNavigate } from "react-router-dom";

export const CreateBook = () => {
  const { mutateAsync, isLoading } = useMutation(createBook);
  const history = useNavigate();
  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    history("/");
  };
  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};
