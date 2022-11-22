import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUser, postLogin, postLogout } from "../backends/auth";

export const useUser = () =>
  useQuery({ queryKey: ["user"], queryFn: () => fetchUser() });

export const useLogin = () => {
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      postLogin(email, password),
  });
  return mutate;
};

export const useLogout = () => {
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => postLogout(),
  });
  return mutate;
};
