import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewBook } from "../../services/users/bookAPI";
import { toast } from "react-hot-toast";

export function useCreateBook() {
  const queryClient = useQueryClient();

  const { mutate: createBook, isLoading: isCreating } = useMutation({
    mutationFn: createNewBook,
    onSuccess: () => {
      toast.success("Tạo sách mới thành công");
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: (err) => toast.error(`Lỗi tạo sách mới: ${err.message}`),
  });

  return { isCreating, createBook };
}
