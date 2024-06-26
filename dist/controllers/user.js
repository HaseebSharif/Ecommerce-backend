import { User } from "../models/user.js";
// import { TryCatch } from "../middlewares/error.js";
// import ErrorHandler from "../utils/utility-class.js";
export const newUser = (async (req, res, next) => {
    const { name, email, photo, gender, _id, dob } = req.body;
    // if (user)
    //   return res.status(200).json({
    //     success: true,
    //     message: `Welcome, ${user.name}`,
    //   });
    // if (!_id || !name || !email || !photo || !gender || !dob)
    //   return next(new ErrorHandler("Please add all fields", 400));
    let user = await User.create({
        name,
        email,
        photo,
        gender,
        _id,
        dob: new Date(dob),
    });
    return res.status(201).json({
        success: true,
        message: `Welcome, ${user.name}`,
    });
});
