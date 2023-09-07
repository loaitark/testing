const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const ApiError = require("../apiError");

//d@desc create user
//@route post /user
//@primision privte
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  console.log(req.body);
  res.status(200).json({ data: user });
});

//@desc get users
//@route get /api/v1/users
//@access protect
exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find({});
  res.status(200).json({ results: user.length, data: user });
});

//@desc get user
//@route get /api/v1/users/:id
//@access protect
exports.getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);

  if (!user) {
    res.status(404).json({ msg: `no user for this id ${id}` });
  }
  res.status(200).json({ data: user });
});

//@desc update user
//@route update /api/v1/users/:id
//@access protect
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );

  if (!user) {
    return next(new ApiError(`no user for this id ${req.params.id}`, 404));
  }
  res.status(200).json({ data: user });
});
//d@desc delete user
//@route delete /user
//@primision privte
exports.deleteOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return next(new ApiError(`no user for this id ${id}`, 404));
  }

  res.status(204).send();
});
