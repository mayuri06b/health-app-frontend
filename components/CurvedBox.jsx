const CurvedBox = () => {
  return (
    <div className="relative w-full max-w-[700px] max-h-[550px] aspect-[7/5]"> {/* Wider but same height */}
      {/* SVG mask definition */}
      <svg viewBox="0 0 400 400" className="absolute w-0 h-0">
        <clipPath id="curved-clip" clipPathUnits="objectBoundingBox">
          <path d="
            M0.05 0
            H0.65
            a0.1 0.1 0 0 1 0.1 0.1
            V0.2
            a0.1 0.1 0 0 0 0.1 0.1
            H0.9
            a0.1 0.1 0 0 1 0.1 0.1
            V0.9
            a0.1 0.1 0 0 1 -0.1 0.1
            H0.05
            a0.1 0.1 0 0 1 -0.05 -0.1
            V0.1
            A0.1 0.1 0 0 1 0.05 0
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
        src="/video.mp4"
      ></video>
    </div>
  );
};

export default CurvedBox;
