export const fetchUser = async () => {
  const res = await fetch("/api/user");
  if (res.status === 401) return null;
  return res.json();
};

export const postLogin = async (email: string, password: string) => {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res.json();
};

export const postLogout = async () => {
  const res = await fetch("/api/logout", {
    method: "POST",
  });
  return res.json();
};
