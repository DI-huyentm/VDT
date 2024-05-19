import {
  IconButton,
  Divider,
  Grid,
  Icon,
  Box,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import TitleText from "../../ui/sharedComponents/TitleText";
import { useCart } from "../../contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const menuItemStyles = {
  whiteSpace: "normal",
  wordWrap: "break-word",
};

export default function CartList({ isOpen, onClose }) {
  const { cartItems, increaseItemAmount, decreaseItemAmount, clearCart } =
    useCart();
  const navigate = useNavigate();

  const totalValue = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.amount,
    0
  );

  return (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      anchorEl={null}
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          maxHeight: "50vh",
          width: "500px",
          marginTop: "45px",
          borderRadius: "10px",
          overflow: "hidden",
          overflowY: "auto",
        },
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item xs={10} ml={5}>
          <TitleText variant="h5">🛒 Danh sách giỏ hàng</TitleText>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={clearCart} sx={{ color: "#051650" }}>
            <Icon>delete</Icon>
          </IconButton>
        </Grid>
      </Grid>

      <Divider />
      {cartItems.map((item, index) => (
        <MenuItem key={index} sx={menuItemStyles}>
          {/* Part 1: Display book image and title */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={2}>
              <Avatar
                alt={item.title}
                src={item.image} // assuming each item has an image property
                sx={{ width: 60, height: 60 }}
                variant="rounded"
              />
            </Grid>
            <Grid item xs={5}>
              <Box>
                <TitleText variant="h7"> {item.title}</TitleText>
                <Typography variant="body2" color="text.secondary">
                  {item.price * item.amount} VND
                </Typography>
              </Box>
            </Grid>

            {/* Part 2: Display the amount of the book */}
            <Grid item xs={2}>
              <Typography variant="body2" color="text.secondary">
                Số lượng: {item.amount}
              </Typography>
            </Grid>

            {/* Part 3: Action buttons to increase and decrease the quantity */}
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={() => increaseItemAmount(index)}>
                  <AddIcon sx={{ color: "#051650" }} />
                </IconButton>
                <IconButton onClick={() => decreaseItemAmount(index)}>
                  <RemoveIcon sx={{ color: "rgba(255, 99, 132, 1)" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </MenuItem>
      ))}
      {cartItems.length === 0 && (
        <MenuItem disabled>Không có sách trong giỏ hàng</MenuItem>
      )}
      <Divider />
      {cartItems.length > 0 && (
        <MenuItem sx={menuItemStyles}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <TitleText variant="h6" color="primary">
                Tổng cộng:
              </TitleText>
            </Grid>
            <Grid item>
              <TitleText variant="h6" color="primary">
                💸{totalValue} VND
              </TitleText>
            </Grid>

            <Grid item>
              <IconButton
                sx={{ color: "#051650" }}
                onClick={() => navigate("/payment")}
              >
                <Icon>payment</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </MenuItem>
      )}
    </Menu>
  );
}
