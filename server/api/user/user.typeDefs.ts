export const userTypeDefs = /* GraphQL */ `
  enum UserRole {
    ADMIN
    USER
  }

  type User {
    id: ObjectID!
    avatar: Image
    createdAt: String!
    email: EmailAddress!
    firstName: String!
    lastName: String!
    phoneNumber: String
    resetPasswordExpires: DateTime
    resetPasswordToken: String
    role: [UserRole!]
    updatedAt: String!
  }

  type Query {
    me: User
    user(id: ObjectID!): User
    users: [User!]
  }

  type Mutation {
    login(input: LoginInput): User
    logout: Boolean
    registerUser(input: RegisterUserInput!): User!
    updateUser(input: UpdateUserInput!): Boolean
    updatePassword(input: UpdatePasswordInput!): Boolean
    updateAvatar(input: UpdateAvatarInput!): Image
  }

  input RegisterUserInput {
    email: EmailAddress!
    firstName: String!
    lastName: String!
    password: String!
  }

  input UpdateUserInput {
    avatar: ImageInput
    email: EmailAddress!
    firstName: String!
    lastName: String!
    phoneNumber: String
  }

  input UpdatePasswordInput {
    oldPassword: String!
    newPassword: String!
  }

  input UpdateAvatarInput {
    image: String!
  }

  input LoginInput {
    email: EmailAddress!
    password: String!
  }
`
