import { useQuery } from "@tanstack/react-query";
import { fetchExampleObjects } from "../backends/example";

export const useExample = ({
  initialData,
}: {
  initialData?: { objects: { id: number; name: string }[] };
}) =>
  useQuery({
    queryKey: ["example"],
    initialData,
    queryFn: () => fetchExampleObjects(),
  });
