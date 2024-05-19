import React, { useState, useEffect } from "react";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { Edit } from "@mui/icons-material"; // Import the Edit icon
import { useForm } from "react-hook-form";
import TitleText from "../../ui/sharedComponents/TitleText";
import { useEditBook } from "./useEditBook";

function BookEdit({ book }) {
  const { editExistingBook, isEditing } = useEditBook();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    // Handle form submission here
    // console.log(data);
    // return;
    editExistingBook({ ...data, id: book.id });
    handleClose(); // Close the dialog after creating the book
  };

  useEffect(() => {
    if (book) {
      Object.keys(book).forEach((key) => {
        if (key === "BookGenres") {
          setValue("genreName", book.BookGenres[0]?.Genre?.name || "");
        } else {
          setValue(key, book[key]);
        }
      });
    }
  }, [book, setValue]);

  return (
    <>
      <IconButton color="primary" onClick={handleOpen} aria-label="edit">
        <Edit />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <TitleText variant="h5">Sửa sách</TitleText>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
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
                defaultValue={book?.BookGenres[0]?.Genre?.name || ""}
              >
                <MenuItem value="Fiction">Fiction</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
              </TextField>
              <Button type="submit" color="error" variant="outlined">
                Sửa sách
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
    </>
  );
}

export default BookEdit;
