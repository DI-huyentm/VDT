import { useState } from "react";
import { Grid } from "@mui/material";
import AppPagination from "../../ui/sharedComponents/AppPagination";
import TitleText from "../../ui/sharedComponents/TitleText";
import BookCard from "./BookCard";
import { useBooks } from "./useBooks";

const BOOKS_PER_PAGE = 6;

function BookCardList() {
  const { books, isLoading, isError, error } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = currentPage * BOOKS_PER_PAGE;
  const paginatedBooks = books.slice(startIndex, endIndex);
  const count = Math.ceil(books.length / BOOKS_PER_PAGE);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Grid
      container
      spacing={3}
      rowGap={4}
      margin="10px auto"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <TitleText variant="h4">Danh sách các sách</TitleText>
      </Grid>

      {paginatedBooks?.map((book) => (
        <BookCard key={book.id} book={book} xs={12} md={4}></BookCard>
      ))}

      <AppPagination
        onChange={handleChange}
        currentPage={currentPage}
        count={count}
      ></AppPagination>
    </Grid>
  );
}

export default BookCardList;
