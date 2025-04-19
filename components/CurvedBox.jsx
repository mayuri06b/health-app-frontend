const CurvedBox = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      {/* SVG mask definition */}
      <svg
        viewBox="0 0 400 400"
        className="absolute w-0 h-0"
      >
        <clipPath id="curved-clip" clipPathUnits="objectBoundingBox">
          <path d="
            M0.1 0
            H0.65
            a0.1 0.1 0 0 1 0.1 0.1
            V0.2
            a0.1 0.1 0 0 0 0.1 0.1
            H0.9
            a0.1 0.1 0 0 1 0.1 0.1
            V0.9
            a0.1 0.1 0 0 1 -0.1 0.1
            H0.1
            a0.1 0.1 0 0 1 -0.1 -0.1
            V0.1
            A0.1 0.1 0 0 1 0.1 0
            Z" />
        </clipPath>
      </svg>

      {/* Video inside clipped area */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ clipPath: "url(#curved-clip)" }}
        src="/video.mp4" // <-- replace with your video path
      ></video>
    </div>
  );
};

export default CurvedBox;
