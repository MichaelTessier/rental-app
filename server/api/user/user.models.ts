import { Model, model, Schema, Document } from "mongoose";
import { User, UserRole } from "../__generated__/graphql";
import * as bcrypt from "bcrypt";


export type UserDocument = Document & UserModel & UserModelMethods;

interface UserModel extends User { 
  password: string
}

interface UserModelMethods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserModel, Model<UserModel>, UserModelMethods>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    // match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    select: false, // Do not return password in queries by default
  },
  phoneNumber: {
    type: String,
    // match: [/^\+?[1-9]\d{1,14}$/, "Please fill a valid phone number"],
  },
  role: {
    type: [String],
    enum: {
      values: Object.values(UserRole),
      message: "Invalid user role",
    },
    default: [UserRole.User],
  },
  avatar: {
    url: String,
    publicId: String,
  },
  resetPasswordToken: {
    type: String,
    default: "",
  },
  resetPasswordExpires: {
    type: Date,   
    default: null,
  },
}, { 
  timestamps: true,
});

userSchema.pre("save", async function (next) {
  if(!this.isModified('password')) return next();

  this.password = bcrypt.hashSync(this.password, 10)

  next()
})

userSchema.method('comparePassword', async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
});

export const UserModel = model<UserModel, Model<UserModel, {}, {}, {}, UserDocument>>("User", userSchema, "users");