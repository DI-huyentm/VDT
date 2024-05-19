import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import PersonIcon from "@mui/icons-material/Person";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { useDeleteBook } from "./useDeleteBook";
import BookEdit from "./BookEdit";
import { useCart } from "../../contexts/CartContext";

function BookCard({ book, xs, md }) {
  const { deleteExistingBook, isDeleting } = useDeleteBook(book.id);
  const { addItem, cartItems, increaseItemAmount } = useCart();

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength - 3)}...`; // Truncate at maxLength-3 and add ellipsis
  };

  const handleDelete = (bookId) => {
    deleteExistingBook(bookId);
  };

  const handleAddToCart = (book) => {
    const existingItem = cartItems?.find((item) => item.id === book.id);
    if (existingItem) {
      increaseItemAmount(existingItem.id);
    } else {
      addItem({
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.image,
        amount: 1,
      });
    }
  };

  return (
    <Grid container item xs={xs} md={md}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Avatar
          alt={book?.title}
          src={book?.image}
          sx={{ width: "100%", height: "300px", objectFit: "cover" }} // Ensure consistent image size
          variant="rounded"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" color="text.secondary">
            {truncateText(book?.title, 60)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateText(book?.description, 300)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ mr: 1 }} />
              Tác giả: {book?.author}
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <Box display="flex" alignItems="center">
              <EuroSymbolIcon sx={{ mr: 1 }} />
              {book?.price} VND
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <Box display="flex" alignItems="center">
              <ProductionQuantityLimitsIcon sx={{ mr: 1 }} />
              Còn {book?.quantity} cuốn sách
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <Box display="flex" alignItems="center">
              <FormatAlignRightIcon sx={{ mr: 1 }} />
              Thể loại: {book?.BookGenres[0]?.Genre?.name}
            </Box>
          </Typography>
        </CardContent>

        <CardActions>
          <Grid container justifyContent="flex-end" sx={{ p: 1 }}>
            <IconButton
              onClick={() => handleDelete(book.id)}
              aria-label="delete"
            >
              <DeleteIcon color="primary" />
            </IconButton>
            <BookEdit book={book} />
            <IconButton
              size="large"
              aria-label="cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="primary"
              onClick={() => handleAddToCart(book)}
            >
              <AddShoppingCartIcon />
            </IconButton>
            <Button
              endIcon={<ArrowForwardIosIcon />}
              component={Link}
              to={"/"}
              variant="contained"
              color="primary"
              sx={{ color: "white" }}
              size="small"
            >
              Chi tiết
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BookCard;
