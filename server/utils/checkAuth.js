import jwt from "jsonwebtoken";

export const chechAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.userId = decoded.id;

      next();
    } catch (error) {
      return res.json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.json({
      message: "Нет доступа",
    });
  }
};
