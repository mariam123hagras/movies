import React from "react";

export default function VideoModal({ videoKey, onClose }) {
  if (!videoKey) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg"
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
}
