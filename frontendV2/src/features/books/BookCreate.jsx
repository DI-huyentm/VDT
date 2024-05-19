import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  MenuItem, // Import MenuItem for the Select component
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useCreateBook } from "./useCreateBook";
import TitleText from "../../ui/sharedComponents/TitleText";

function BookCreate() {
  const { createBook, isCreating } = useCreateBook();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    // Call the createBook function with the form data
    await createBook(data);
    handleClose(); // Close the dialog after creating the book
  };

  return (
    <Grid container sx={{ mt: 3 }}>
      <Button
        startIcon={<AddCircleOutline />}
        variant="outlined"
        color="primary"
        disabled={isCreating}
        size="large"
        onClick={handleOpen} // Open the dialog when the button is clicked
      >
        Tạo sách mới
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <TitleText variant="h5">Thêm sách mới</TitleText>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Form for adding a new book */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("title", { required: true })}
                label="Tiêu đề"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("author", { required: true })}
                label="Tác giả"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("price", { required: true })}
                label="Giá"
                type="number"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("quantity", { required: true })}
                label="Số lượng"
                type="number"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("image", { required: true })}
                label="Ảnh"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("description", { required: true })}
                label="Mô tả"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("genreName", { required: true })}
                select
                label="Thể loại"
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="Fiction">Fiction</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>

                {/* Add more genre options as needed */}
              </TextField>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ color: "white" }}
              >
                Tạo sách
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default BookCreate;
