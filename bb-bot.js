
import { getRandomQuote } from './usefulFunctions.js'
import { postTweet } from './twitterActions.js';

// const dt = new Date(2022, 7, 11, 16)
const quote = await getRandomQuote()

await postTweet(quote);