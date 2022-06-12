
import client from './twitter_client.js'
import { breakingBadApi } from './axios_config.js'
import { downloadImg } from './usefulFunctions.js'
import fs from 'fs';

const postTweet = async (tweetData) => {
  let tweet = `${tweetData.quote} \nAuthor: ${tweetData.author}`
  try {
    const media = {
      'media_ids': [await uploadMediaTwitter(tweetData.author)]
    }
    await client.v2.tweet(tweet, { media: media })
    console.log('Tweet posted with Success')
  }

  catch (e) {
    console.log(e)
  }
}

const uploadMediaTwitter = async (quoteAuthor) => {
  const authorSearch = await breakingBadApi.get('characters', {
    params: {
      'name': quoteAuthor
    }
  })

  console.log(authorSearch)

  let authorImgLink = authorSearch.data[0].img;
  const imgDownloadedPath = await downloadImg(authorImgLink);
  const mediaId = await client.v1.uploadMedia(imgDownloadedPath);

  fs.unlink(imgDownloadedPath, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Deleted File')
  })
  
  return mediaId;
}

export {
  postTweet,
  uploadMediaTwitter
}