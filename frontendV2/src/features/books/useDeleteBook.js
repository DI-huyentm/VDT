import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../../services/users/bookAPI";
import { toast } from "react-hot-toast";

export function useDeleteBook() {
  const queryClient = useQueryClient();

  const { mutate: deleteExistingBook, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      toast.success("Xóa sách thành công");
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: (err) => toast.error(`Lỗi xóa sách mới: ${err.message}`),
  });

  return { isDeleting, deleteExistingBook };
}
