import { API } from './constant';

export default function getData(query) {
  console.log("api", API+"term="+query)
  return fetch(API+"term="+query).then(response => response.json());
}



// Search Examples

// The following are examples of fully-qualified URLs for specific search requests:

// To search for all Jack Johnson audio and video content (movies, podcasts, music, music videos, audiobooks, short films, and tv shows), use the following URL: https://itunes.apple.com/search?term=jack+johnson.

// To search for all Jack Johnson audio and video content and return only the first 25 items, use the following URL: https://itunes.apple.com/search?term=jack+johnson&limit=25.

// To search for only Jack Johnson music videos, use the following URL: https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo.

// To search for all Jim Jones audio and video content and return only the results from the Canada iTunes Store, use the following URL: https://itunes.apple.com/search?term=jim+jones&country=ca.

// To search for applications titled “Yelp” and return only the results from the United States iTunes Store, use the following URL: https://itunes.apple.com/search?term=yelp&country=us&entity=software