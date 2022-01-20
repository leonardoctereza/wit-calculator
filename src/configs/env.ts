import dotenv from 'dotenv';
dotenv.config();

const env = {
  serverPort: process.env.PORT || 3000,
  mongoDb: {
    url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_PATH}`,
    mongoDebug: false,
  },
  logger: false,
};

export { env };
