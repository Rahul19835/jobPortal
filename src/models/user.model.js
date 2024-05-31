const users = [];

export const getAllUsers = () => users;

export const addUser = (user) => {
  users.push(user);
  return true;
};

export const confirmUserLogin = (email, password) => {
  return users.find(user => user.email === email && user.password === password);
};
