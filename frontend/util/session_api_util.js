export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: user,
    success: e => console.log(e)
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
  });
};

export const editUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user}
  });
};
