export default function convertVideoLink(youtubeUrl) {
  let videoId = "";
  let playlistId = "";

  // Check for the regular YouTube video URL (https://www.youtube.com/watch?v=VIDEO_ID)
  const regularExp =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;

  // Check for the shortened YouTube video URL (https://youtu.be/VIDEO_ID)
  const shortExp = /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/;

  // Check for the YouTube playlist URL (https://www.youtube.com/playlist?list=PLAYLIST_ID)
  const playlistExp =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*[?&]list=([a-zA-Z0-9_-]+)/;

  // Check for the YouTube embed URL (https://www.youtube.com/embed/VIDEO_ID)
  const embedExp =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/;

  // Check for the YouTube no-cookie embed URL (https://www.youtube-nocookie.com/embed/VIDEO_ID or /videoseries?list=)
  const noCookieExp =
    /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]+)/;

  // Check for the YouTube no-cookie playlist URL (https://www.youtube-nocookie.com/embed/videoseries?list=PLAYLIST_ID)
  const noCookiePlaylistExp =
    /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/videoseries\?list=([a-zA-Z0-9_-]+)/;

  // Match the YouTube embed URL (already in embed format)
  if (embedExp.test(youtubeUrl)) {
    return youtubeUrl; // If already in embed format, return it as is
  }

  // Match the YouTube no-cookie embed URL (already in embed format)
  if (noCookieExp.test(youtubeUrl) || noCookiePlaylistExp.test(youtubeUrl)) {
    return youtubeUrl; // If already in no-cookie embed format, return it as is
  }

  // Match the regular YouTube video URL
  if (regularExp.test(youtubeUrl)) {
    videoId = youtubeUrl.match(regularExp)[1];
  }
  // Match the shortened YouTube video URL
  else if (shortExp.test(youtubeUrl)) {
    videoId = youtubeUrl.match(shortExp)[1];
  }
  // Match the YouTube playlist URL
  else if (playlistExp.test(youtubeUrl)) {
    playlistId = youtubeUrl.match(playlistExp)[1];
  } else {
    // If no match, return the original URL
    return -1;
  }

  // Return the embed format based on whether it's a video or playlist
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } else if (playlistId) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`;
  }
}
