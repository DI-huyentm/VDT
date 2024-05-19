import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBook } from "../../services/users/bookAPI";
import { toast } from "react-hot-toast";

export function useEditBook() {
  const queryClient = useQueryClient();

  const { mutate: editExistingBook, isLoading: isEditing } = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      toast.success("Sửa sách thành công");
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: (err) => toast.error(`Lỗi sửa sách: ${err.message}`),
  });

  return { isEditing, editExistingBook };
}
