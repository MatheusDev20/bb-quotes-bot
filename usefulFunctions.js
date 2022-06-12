import https from 'https'
import fs from 'fs'

import { breakingBadApi } from "./axios_config.js"

const downloadImg = async (link) => {
  let imgPath = `imgs/upload.jpg`

  return new Promise((resolve, reject) => {
    https.get(link, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(imgPath))
          .on('error', reject)
          .once('close', () => resolve(imgPath))
      }
      else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`))
      }
    })
  })
}

const getRandomQuote = async () => {
  const res = await breakingBadApi.get('/quote/random')
  let randomQuote = res.data[0]
  return randomQuote
}

export { getRandomQuote, downloadImg }