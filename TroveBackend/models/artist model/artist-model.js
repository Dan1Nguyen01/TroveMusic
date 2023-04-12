const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  artistName: {
    type: String,
    required: [true, `Please provide artist's name`],
    maxLength: 50,
  },

  bio: {
    type: String,
    maxLength: [250, "Max length is 250 words"],
  },

  artistImg: {
    type: String,
    default: "https://firebasestorage.googleapis.com/v0/b/helical-analyst-376421.appspot.com/o/images%2FartistPicPlaceholder.png?alt=media&token=2e12a07f-4c39-4029-8c7c-d30fcbcfa84c"
  },

  email: {
    type: String,
    required: [true, `Please provide email`],
    unique: true,
  },

  password: {
    type: String,
    required: [true, `Please provide password`],
  },

  dob: {
    type: Date,
  },

  gender: {
    type: String,
  },

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  ],
  albumList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      default: null,
    },
  ],

  epList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EP",
      default: null,
    },
  ],

  songList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      default: null,
    },
  ],

  searchCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Artist", artistSchema);
