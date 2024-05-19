import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/users/bookAPI";

export function useBooks() {
  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBooks(),
  });

  return { isLoading, isError, error, books };
}
