import { useState, useRef, useEffect, useCallback } from "react";
import cover1 from "../../assets/musicPlayer/cover-1.jpg";
import cover2 from "../../assets/musicPlayer/cover-2.jpg";
import song1 from "../../assets/musicPlayer/lost-in-city-lights.mp3";
import song2 from "../../assets/musicPlayer/forest-lullaby.mp3";
import "./MusicPlayApp.css";

import play from "../../assets/musicPlayer/Play_fill.svg";

import nextAndStop from "../../assets/musicPlayer/Stop_and_play_fill.svg";
import previousAndStop from "../../assets/musicPlayer/Stop_and_play_fill-1.svg";
import pause from "../../assets/musicPlayer/Stop_and_play_fill_reverse.svg";
import { ProgressBar } from "./ProgressBar";

interface MusicPlayerAppProps {
  id?: number;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
  duration: string;
  currentTime: string;
}

const songs: MusicPlayerAppProps[] = [
  {
    id: 1,
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    coverUrl: cover1,
    audioUrl: song1,
    duration: "00:00",
    currentTime: "00:00",
  },
  {
    id: 2,
    title: "Forest Lullaby",
    artist: "Lesfm",
    coverUrl: cover2,
    audioUrl: song2,
    duration: "00:00",
    currentTime: "00:00",
  },
];

export const MusicPlayerApp: React.FC = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleNextSongOrPause = () => {
    setCurrentSong(songs[songs.indexOf(currentSong) + 1]);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    setCurrentSong(songs[songs.indexOf(currentSong) - 1]);
    setIsPlaying(true);
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    const updateDuration = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentSong]);

  const formatTime = useCallback((seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  return (
    <div className="music-player-app-container">
      <div className="music-player-app-header">
        <div className="music-player-app-header-songs">
          <div>
            <img
              style={{ borderRadius: "12px" }}
              src={currentSong.coverUrl}
              alt={currentSong.title}
            />
            <div className="music-player-app-header-songs-title">
              <span style={{ fontSize: "1rem", color: "#E5E7EB" }}>
                {currentSong.title}
              </span>
              <span style={{ fontSize: "0.875rem", color: "#E5E7EB" }}>
                {currentSong.artist}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="music-player-app-progress-bar">
        <audio
          style={{ display: "none" }}
          ref={audioRef}
          src={currentSong.audioUrl}
        />
        <ProgressBar
          audioRef={audioRef as React.RefObject<HTMLAudioElement>}
          duration={formatTime(duration)}
          currentTime={formatTime(currentTime)}
          setCurrentTime={setCurrentTime}
        />
        <div className="music-player-app-controls">
          <button
            style={{
              fontSize: "0.875rem",
              color: "#E5E7EB",
              backgroundColor: "transparent",
            }}
            onClick={handlePreviousSong}
          >
            <img src={previousAndStop} alt="previous" />
          </button>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C93B76",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
            onClick={isPlaying ? handlePause : handlePlay}
          >
            <img src={isPlaying ? pause : play} alt="play" />
          </button>
          <button
            style={{
              fontSize: "0.875rem",
              color: "#E5E7EB",
              backgroundColor: "transparent",
            }}
            onClick={handleNextSongOrPause}
          >
            <img src={nextAndStop} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
