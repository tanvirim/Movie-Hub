const { loginService, registerService } = require("../service/auth");

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;


  //check if user provided any data
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid user provided data" });
  }

  try {
    const user = await registerService({ name, email, password });
    return res.status(201).json({ 
      success: true ,
      message: "User created successfully" });
   
  } catch (error) {
    next(error);

    return res.status(500).json({ message: "Internal server error" });
    
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  try {
    const token = await loginService({ email, password });

    res.status(200).json({success: true , message: "login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerController, loginController };
