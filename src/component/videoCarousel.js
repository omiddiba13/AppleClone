import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightlightsSlides } from "../constants/index";
import { images } from "../utils/index";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_VIDEO_STATE = {
  isEnd: false,
  startPlay: false,
  videoId: 0,
  isLastVideo: false,
  isPlaying: false,
};

const VideoCarousel = () => {
  // Optimize refs with useRef arrays
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState(INITIAL_VIDEO_STATE);
  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;
  const { replayImg, playImg, pauseImg } = useMemo(() => images, []);

  // Optimize GSAP animations
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  // Optimize progress bar animation
  useEffect(() => {
    if (!videoSpanRef.current[videoId]) return;

    let currentProgress = 0;
    const span = videoSpanRef.current;
    const anim = gsap.to(span[videoId], {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        if (progress === currentProgress) return;

        currentProgress = progress;
        const getProgressWidth = () => {
          const { innerWidth } = window;
          return innerWidth < 760 ? "10vw" : innerWidth < 1200 ? "10vw" : "4vw";
        };

        gsap.to(videoDivRef.current[videoId], {
          width: getProgressWidth(),
        });

        gsap.to(span[videoId], {
          width: `${currentProgress}%`,
          backgroundColor: "white",
        });
      },
      onComplete: () => {
        if (!isPlaying) return;

        gsap.to(videoDivRef.current[videoId], {
          width: "12px",
        });
        gsap.to(span[videoId], {
          backgroundColor: "#afafaf",
        });
      },
    });

    if (videoId === 0) anim.restart();

    const animUpdate = () => {
      const currentVideo = videoRef.current[videoId];
      const videoDuration = hightlightsSlides[videoId].videoDuration;

      if (currentVideo && videoDuration) {
        anim.progress(currentVideo.currentTime / videoDuration);
      }
    };

    if (isPlaying) {
      gsap.ticker.add(animUpdate);
    }

    return () => gsap.ticker.remove(animUpdate);
  }, [videoId, startPlay, isPlaying]);

  // Video play/pause management
  useEffect(() => {
    if (loadedData.length > 3) {
      const currentVideo = videoRef.current[videoId];

      if (currentVideo) {
        if (!isPlaying) {
          currentVideo.pause();
        } else if (startPlay) {
          currentVideo.play();
        }
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // Optimized process handler with useCallback
  const handleProcess = useCallback(
    (type, i) => {
      const processActions = {
        "video-end": () => ({ isEnd: true, videoId: i + 1 }),
        "video-last": () => ({ isLastVideo: true }),
        "video-reset": () => ({ videoId: 0, isLastVideo: false }),
        pause: (prev) => ({ isPlaying: !prev.isPlaying }),
        play: (prev) => ({ isPlaying: !prev.isPlaying }),
        default: () => video,
      };

      const action = processActions[type] || processActions.default;
      setVideo((prev) => ({ ...prev, ...action(prev) }));
    },
    [video],
  );

  // Metadata loading handler
  const handleLoadedMetaData = useCallback((i, e) => {
    setLoadedData((prev) => [...prev, e]);
  }, []);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}>
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.length > 0 &&
            videoRef.current.map((_, i) => (
              <span
                key={i}
                className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                ref={(el) => (videoDivRef.current[i] = el)}
                onClick={() => setVideo((prev) => ({ ...prev, videoId: i }))}>
                <span
                  className="absolute h-full w-full rounded-full"
                  ref={(el) => (videoSpanRef.current[i] = el)}
                />
              </span>
            ))}
        </div>

        <button className="control-btn ml-4">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default React.memo(VideoCarousel);
