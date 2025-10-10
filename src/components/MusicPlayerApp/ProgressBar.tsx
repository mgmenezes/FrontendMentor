interface ProgressBarProps {
  duration: string;
  currentTime: string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const ProgressBar = ({
  duration,
  currentTime,
  audioRef,
}: ProgressBarProps) => {
  const progress =
    parseFloat(duration) > 0
      ? (parseFloat(currentTime) / parseFloat(duration)) * 100
      : 0;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const timeToSeconds = (time: string): number => {
    if (!time || time === "00:00") return 0;
    const parts = time.split(":");
    const mins = parseInt(parts[0]) || 0;
    const secs = parseInt(parts[1]) || 0;
    return mins * 60 + secs;
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar-time">
        <span style={{ fontSize: "0.875rem", opacity: "0.5" }}>
          {currentTime}
        </span>
        <span style={{ fontSize: "0.875rem", opacity: "0.5" }}>{duration}</span>
      </div>
      <input
        min={0}
        max={timeToSeconds(duration)}
        value={timeToSeconds(currentTime)}
        onChange={handleSliderChange}
        style={{
          height: "6px",
          background: `linear-gradient(
            to right,
            #E11D48 0%,
            #E11D48 ${progress}%,
            #4B5563 ${progress}%,
            #4B5563 100%
          )`,
        }}
        type="range"
      />
    </div>
  );
};
