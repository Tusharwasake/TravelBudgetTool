import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);   

  if (!token) {
    return res.status(401).json({ msg: "Access denied No token provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
        return res.status(401).json({ msg: "Access token expired" });
      }
    res.status(403).json({ msg: "Invalid token" });
  }
};

export { authenticateToken };
