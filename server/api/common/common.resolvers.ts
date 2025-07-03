import { EmailAddressResolver, ObjectIDResolver, DateTimeResolver } from 'graphql-scalars'

export const commonResolvers = {
  EmailAddress: EmailAddressResolver,
  ObjectID: ObjectIDResolver,
  DateTime: DateTimeResolver,
}