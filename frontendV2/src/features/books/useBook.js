import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../../services/users/bookAPI";

export function useBook(bookId) {
  const {
    data: book,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["books", bookId],
    queryFn: () => fetchBook(bookId),
  });

  return { isLoading, isError, error, book };
}
