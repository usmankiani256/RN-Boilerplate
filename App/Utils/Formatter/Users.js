const UsersFormatter = {
  get: (users) => {
    return users.map((user) => {
      return {
        name: user.name,
      };
    });
  },
};

// Export
export default UsersFormatter;
