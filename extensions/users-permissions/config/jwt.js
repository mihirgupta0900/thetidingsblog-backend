module.exports = {
  jwtSecret: process.env.JWT_SECRET || "10283658-6660-4f63-92e6-c569bac929cb",
  jwt: {
    expiresIn: "100y",
  },
};
