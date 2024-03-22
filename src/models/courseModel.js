import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Please provide an email"],
  },
  faculties: {
    type: String,
    required: [true, "Please provide a password"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Difficult"],
    default: null,
  },
  videos: [
    {
      title: String,
      link: String,
      info: String,
      rating: Number
    }
  ],

  resources: [
    {
      type: {
        type: String,
        enum: ["Drive", "GitHub", "Weblink"]
      }
    }
  ]
  
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
