const mongoose = require("mongoose");
const Profile = require("../models/Profile");
const User = require("../models/User");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const Comment = require("../models/Comment");
const Answer = require("../models/Answer");

exports.updateProfile = async (req, res) => {
  try {
    const {
      dateOfBirth,
      about,
      gender,
      collegeName,
      collegeBranch,
      firstName,
      lastName,
    } = req.body;
    const id = req.user.id;

    const userDetails = await User.findById(id);
    const profile = await Profile.findById(userDetails.additionalDetails);

    if (firstName) profile.firstName = firstName;
    if (lastName) profile.lastName = lastName;
    await user.save();

    profile.dateOfBirth = dateOfBirth;
    profile.about = about;
    profile.gender = gender;
    profile.collegeName = collegeName;
    profile.collegeBranch = collegeBranch;

    await profile.save();

    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    await Profile.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(user.additionalDetails),
    });

    for (const communityID of user.community) {
      await Course.findByIdAndUpdate(
        communityID,
        { $pull: { members: id } },
        { new: true }
      );
    }

    await User.findByIdAndDelete({ _id: id });

    await Comment.deleteMany({ userId: id });
    await Like.deleteMany({ userId: id });
    await Post.deleteMany({ userId: id });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .populate("interestedTags")
      .exec();
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProfilePicture = async (req, res) => {
  try {
    const profilePicture = req.files.profilePicture;
    const userId = req.user.id;

    const image = await uploadToCloudinary(
      profilePicture,
      process.env.FOLDER_NAME
    );

    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { profilePicture: image.secure_url },
      { new: true }
    );

    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProfileCoverPage = async (req, res) => {
  try {
    const userID = req.user.id;
    const coverPicture = req.files.coverPicture;

    if (!coverPicture) {
      return res.status(400).json({
        success: false,
        message: "coverPicture is missing",
      });
    }

    let user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const image = await uploadToCloudinary(
      coverPicture,
      process.env.FOLDER_NAME_COMMUNITY
    );

    user.coverPicture = image.secure_url;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile cover page updated successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserPost = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).populate("posts").exec();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserDoubts = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).populate("doubts").exec();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserMemberCommunity = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).populate("community").exec();
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserEntireDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id)
      .populate("additionalDetails")
      .populate("community")
      .populate("posts")
      .populate("doubts")
      .exec();
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error occured while fetching user details");
    console.log(error);
  }
};

exports.getotheruserdetails = async (req, res) => {
  try {
    const userID = req.body.userID;
    const user = await User.findById(userID)
      .populate("additionalDetails")
      .populate("community")
      .populate("posts")
      .populate("doubts")
      .exec();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.password = undefined;
    user.token = undefined;
    user.reserPasswordExpires = undefined;

    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserComments = async (req, res) => {
  try {
    const userId = req.user.id;

    const comments = Comment.find({ commentedBy: userId });

    if (!userID) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: comments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserAnswer = async (req, res) => {
  try {
    const userID = req.user.id;

    const answers = Answer.find({ answeredBy: userID });

    if (!userID) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: answers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
