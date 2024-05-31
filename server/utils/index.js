
import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  // Create the JWT token with the user ID and the JWT secret
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Set the cookie with the token in the HTTP response
  res.cookie("token", token, {
    httpOnly: true, // Make the cookie accessible only via HTTP(S) requests
    secure: process.env.NODE_ENV === "production", // Use secure cookies only in production
    sameSite: "Lax", // Set the sameSite attribute to prevent CSRF attacks
    maxAge: 1 * 24 * 60 * 60 * 1000, // Set the cookie to expire in one day
  });
};

export default createJWT;











// ------------------------------------------>

// import jwt from "jsonwebtoken";

// const createJWT = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   // res.cookie("token", token, {
//   //   httpOnly: true,
//   //   secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
//   //   sameSite: "strict", // Prevent CSRF attacks
//   //   maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
//   // });

//   res.cookie("token", token, {
//        httpOnly: true,
//        secure: true,
//       sameSite: "none",
//       maxAge: 1 * 24 * 60 * 60 * 1000,
//  });
// };

// export default createJWT;
