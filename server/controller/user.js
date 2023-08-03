const User = require('../models/user')
const currentUserController = async (req , res , next) => {
    const user = await User.findById(req.user._id).select("-password")
    res.send({
      success: true,
      message: "current user fetched successfully",
      data: user ,
    })
}

module.exports = currentUserController