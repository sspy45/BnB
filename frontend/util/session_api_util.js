export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: user,
    success: res => console.log(res),
    fail: res => console.log(res)
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/session",
  })
);
