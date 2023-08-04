const User = require('../models/user')
const currentUserController = async (req , res , next) => {
try {
  const user = await User.findById(req.user._id).select("-password")
  res.send({
    success: true,
    message: "current user fetched successfully",
    data: user ,
  })
} catch (error) {
  res.status(500).send({
    success: false,
    message: "An error occurred while fetching current user",
    error: error.message, // This will send the error message to the client
  });
   
  
}
}

module.exports = currentUserController