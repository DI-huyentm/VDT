import { Box } from "@mui/material";
import Chart from "../ui/charts/Chart";
import BookCardList from "../features/books/BookCardList";
import BookCreate from "../features/books/BookCreate";

function Homepage() {
  return (
    <Box sx={{ width: { md: "80%", xs: "90%" }, margin: "0 auto" }}>
      <Chart />
      <BookCreate />
      <BookCardList />
    </Box>
  );
}

export default Homepage;
