import axios from "axios";

const getYoutbeDownloader = async (req, res) => {
  const url = req.query["url"];

  const regex = /(?<=v=)[^&]+/;
  const match = url.match(regex);
  const videoId = match[0];

  const options = {
    method: 'GET',
    url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
    params: {
      videoId: videoId,
    },
    headers: {
      'X-RapidAPI-Key': '657511860bmshc64d95031b8d75cp1a1e0bjsn725a1c9d6249',
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
}

export default {
  getYoutbeDownloader,
}