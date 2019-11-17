const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'mongodb+srv://huyhoang:hoang1001@cluster0-sh1mj.mongodb.net/test?retryWrites=true&w=majority',
      
    oauth: {
      google: {
        clientID: '1053673331434-5779lnp8ltinkjij08bhh2gjhls15ugq.apps.googleusercontent.com',
        clientSecret: 'nDjxQdj9iMgmjdfwWn-lxAPj'
      }
    }
  }
  
  module.exports=config;
  