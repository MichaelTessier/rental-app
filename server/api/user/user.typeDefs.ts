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
    registerUser(input: UserInput!): User!
  }

  input UserInput {
    avatar: ImageInput
    email: EmailAddress!
    firstName: String!
    lastName: String!
    password: String!
    phoneNumber: String
    role: [UserRole!]
  }

  input LoginInput {
    email: EmailAddress!
    password: String!
  }
`
