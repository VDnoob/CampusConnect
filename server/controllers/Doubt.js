const Doubt = require("../models/Doubt");
const User = require("../models/User");
const Community = require("../models/Community");
const Tag = require("../models/Tag");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const Answer = require("../models/Answer");

exports.createDoubt = async (req, res) => {
  try {
    const { content, communityName, tags } = req.body;
    const userId = req.user.id;
    if (!userId || !content || !communityName) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const createdBy = await User.findById(userId);
    if (!createdBy) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const community = await Community.findOne({ name: communityName });

    let doubt = await Doubt.create({
      createdBy: userId,
      content,
      community: community._id,
    });

    let doubtObj = await Doubt.findById(doubt._id);

    if (req.files && req.files.file) {
      const filei = await uploadToCloudinary(req.files.file);
      doubtObj.fileUrl = filei.secure_url;
    }

    if (tags) {
      for (let i = 0; i < tags.length; i++) {
        const tag = await Tag.findOne({ name: tags[i] });
        if (!tag) {
          const newTag = await Tag.create({ name: tags[i] });
          doubtObj.tags.push(newTag._id);
          newTag.doubts.push(doubt._id);
          await newTag.save();
        } else {
          doubtObj.tags.push(tag._id);
          tag.doubts.push(doubtObj._id);
          await tag.save();
        }
      }
    }

    community.doubts.push(doubt._id);
    await community.save();

    await doubtObj.save();

    res.status(200).json({
      success: true,
      message: "Doubt created successfully",
      data: doubtObj,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoubt = async (req, res) => {
  try {
    const { doubtId } = req.body;
    const { content } = req.body;

    const doubt = await Doubt.findById(doubtId);

    if (!doubt) {
      return res.status(404).json({
        success: false,
        message: "Doubt not found",
      });
    }

    if (doubt.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this Doubt",
      });
    }

    if (req.files && req.files.file) {
      const fileUrl = await uploadToCloudinary(req.files.file);
      doubt.fileUrl = fileUrl.secure_url;
    }

    doubt.content = content;

    doubt.updatedAt = new Date();

    await doubt.save();

    res.status(200).json({
      success: true,
      message: "Doubt updated successfully",
      data: doubt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoubt = async (req, res) => {
  try {
    const doubtId = req.body.doubtId;

    const doubt = await Doubt.findById(doubtId);

    if (!doubt) {
      return res.status(404).json({
        success: false,
        message: "Doubt not found",
      });
    }

    if (doubt.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this Doubt",
      });
    }

    for (let i = 0; i < doubt.tags.length; i++) {
      const tag = await Tag.findOne({ name: doubt.tags[i] });
      tag.doubts.pull(doubt._id);
      await tag.save();
    }

    for (let i = 0; i < doubt.answers.length; i++) {
      await Answer.findByIdAndDelete(doubt.answers[i]);
    }

    const community = await Community.findById(doubt.community);
    await community.doubts.pull(doubt._id);
    await community.save();

    await Doubt.findByIdAndDelete(doubtId);
    res.status(200).json({
      success: true,
      message: "Doubt deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================================================================================================
exports.getDoubtDetails = async (req, res) => {
  try {
    const doubtId = req.body.doubtId;

    const doubt = await Doubt.findById(doubtId)
      .populate("createdBy")
      .populate("tags")
      .populate("likes")
      .populate({
        path: "answers",
        populate: {
          path: "answeredBy",
        },
      })
      .exec();

    if (!doubt) {
      return res.status(404).json({
        success: false,
        message: "Doubt not found",
      });
    }

    res.status(200).json({
      success: true,
      data: doubt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
