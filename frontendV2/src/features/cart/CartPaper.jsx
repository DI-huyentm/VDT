import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Icon } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

import CustomCard from "../../ui/sharedComponents/CustomCard";
import TitleText from "../../ui/sharedComponents/TitleText";

const menuItemStyles = {
  whiteSpace: "normal",
  wordWrap: "break-word",
};

function CartPaper() {
  const { cartItems, increaseItemAmount, decreaseItemAmount, clearCart } =
    useCart();

  const navigate = useNavigate();

  const totalValue = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.amount,
    0
  );

  return (
    <CustomCard>
      <Grid container justifyContent="center">
        <Grid item xs={10} my={2}>
          <TitleText variant="h5">🛒 Xác nhận giỏ hàng</TitleText>
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
              <IconButton sx={{ color: "#051650" }}>
                <Icon>check</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </MenuItem>
      )}
    </CustomCard>
  );
}

export default CartPaper;
