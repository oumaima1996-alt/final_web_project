const jwt = require('jsonwebtoken')


exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split("")[1];
      const user = jwt.verify(token, process.env.secretOrKey);
      req.user = user;
    } else {
      return res.status(400).json({ message: "Authorization required" });
    }
    next();
  };
  
  exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== "user") {
      return res.status(400).json({ message: "User access denied" });
    }
    next();
  };
  
  exports.adminMiddleware = (req, res, next) => {
    if (req.user.role === "user") {
     return res.status(400).json({ message: "Admin access denied" });
      }
    
    next();
  };
  
  exports.superAdminMiddleware = (req, res, next) => {
    if (req.user.role !== "super-admin") {
      return res.status(200).json({ message: "Super Admin access denied" });
    }
    next();
  };

// module.exports = {requireSignin,userMiddleware, adminMiddleware, superAdminMiddleware }
  


// exports.signup = (req, res) => {
//   User.findOne({ email: req.body.email }).exec((error, user) => {
//     if (user)
//       return res.status(400).json({
//         message: "Admin already registered",
//       });

//     User.estimatedDocumentCount(async (err, count) => {
//       if (err) return res.status(400).json({ error });
//       let role = "admin";
//       if (count === 0) {
//         role = "super-admin";
//       }

//       const { firstName, lastName, email, password } = req.body;
//       const hash_password = await bcrypt.hash(password, 10);
//       const _user = new User({
//         firstName,
//         lastName,
//         email,
//         hash_password,
//         username: shortid.generate(),
//         role,
//       });

//       _user.save((error, data) => {
//         if (error) {
//           return res.status(400).json({
//             message: "Something went wrong",
//           });
//         }

//         if (data) {
//           return res.status(201).json({
//             message: "Admin created Successfully..!",
//           });
//         }
//       });
//     });
//   });
// };

// exports.signin = (req, res) => {
//   User.findOne({ email: req.body.email }).exec(async (error, user) => {
//     if (error) return res.status(400).json({ error });
//     if (user) {
//       const isPassword = await user.authenticate(req.body.password);
//       if (
//         isPassword &&
//         (user.role === "admin" || user.role === "super-admin")
//       ) {
//         const token = jwt.sign(
//           { _id: user._id, role: user.role },
//           process.env.JWT_SECRET,
//           { expiresIn: "1d" }
//         );
//         const { _id, firstName, lastName, email, role, fullName } = user;
//         res.cookie("token", token, { expiresIn: "1d" });
//         res.status(200).json({
//           token,
//           user: { _id, firstName, lastName, email, role, fullName },
//         });
//       } else {
//         return res.status(400).json({
//           message: "Invalid Password",
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//   });
// };
