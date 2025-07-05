export default {
  jwtToken: process.env.JWT_SECRET || '',
  jwtExpiration: Number(process.env.JWT_EXPIRATION) || 108000,
}