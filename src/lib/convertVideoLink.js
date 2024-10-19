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
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  }
}
