import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader";

const YouTubeVideos = () => {
  const API_KEY = "AIzaSyDI3jbAxalxiCopR2ioG8hrpjLRgE6CGoE";
  const CHANNEL_ID = "UC-Wt60gpr_a_cO3rd67ACAg";
  const maxRes = 10;
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

//   {
//   "error": {
//     "code": 403,
//     "message": "Requests from referer \u003cempty\u003e are blocked.",
//     "errors": [
//       {
//         "message": "Requests from referer \u003cempty\u003e are blocked.",
//         "domain": "global",
//         "reason": "forbidden"
//       }
//     ],
//     "status": "PERMISSION_DENIED",
//     "details": [
//       {
//         "@type": "type.googleapis.com/google.rpc.ErrorInfo",
//         "reason": "API_KEY_HTTP_REFERRER_BLOCKED",
//         "domain": "googleapis.com",
//         "metadata": {
//           "httpReferrer": "\u003cempty\u003e",
//           "service": "youtube.googleapis.com",
//           "consumer": "projects/449353750298"
//         }
//       },
//       {
//         "@type": "type.googleapis.com/google.rpc.LocalizedMessage",
//         "locale": "en-US",
//         "message": "Requests from referer \u003cempty\u003e are blocked."
//       }
//     ]
//   }
// }



  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxRes}`
    )
      .then((res) => res.json())
      .then((data) => {
        const videoItems = data.items.filter(
          (item) => item.id.kind === "youtube#video"
        );
        setVideos(videoItems);
        setLoading(false);
        // console.log(videos);
      })
      .catch((err) => {
        console.error("Failed to fetch videos:", err);
        setLoading(false);
      });
  }, []);

  return (

    <div>
      <h2>Latest YouTube Videos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>

      {loading ? (
        <Loader></Loader>
      ) : (
      
        videos.map((video) => {
          const videoId = video.id.videoId;
          return (
            <div key={videoId} style={{ width: "300px", position: "relative" }}>
              {playingVideoId === videoId ? (
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <div
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => setPlayingVideoId(videoId)}
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    ▶️
                  </div>
                </div>
              )}
              <p>{video.snippet.title}</p>
            </div>
          );
        })
      )}

      </div>
    </div>
  );
};

export default YouTubeVideos;
