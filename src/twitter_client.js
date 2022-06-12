import { config } from 'dotenv'
import { TwitterApi } from 'twitter-api-v2';

config()

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET
})

export default client;