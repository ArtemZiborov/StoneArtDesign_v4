// src/components/YouTubePlayer.jsx
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoIds }) => {
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // Prevent auto-play for multiple videos
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Watch These Videos</h2>
      <div className="space-y-6">
        {videoIds.map((videoId) => (
          <YouTube key={videoId} videoId={videoId} opts={videoOptions} />
        ))}
      </div>
    </div>
  );
};
YouTubePlayer.propTypes = {
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default YouTubePlayer;
