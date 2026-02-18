import React, { useState, useRef, useEffect } from "react";

import SnakeXenzia from "../assets/project_thumbnails/SnakeXenzia_thumbnail.png";
import TaskManager from "../assets/project_thumbnails/TMtido_thumbnail.png";
import ImageGallery from "../assets/project_thumbnails/gallery_thumbnail.png";
import PasswordManager from "../assets/project_thumbnails/pass-manager-pic.jpg";
import EmailPasswordValidator from "../assets/project_thumbnails/EPvalidator_thumbnail.png";
import AdBanner from "../assets/project_thumbnails/AdBanner_thumbnail.png";
import SearchEngine from "../assets/project_thumbnails/SearchEngine_thumbnail.png";

import gallerVideo from "../assets/project_videos/GalleryVid.mp4";
import AdBannerVid from "../assets/project_videos/AdBannerVid.mp4";
import EmailPassValidatorVid from "../assets/project_videos/EmailPassValidatorVid.mp4";
import PasswordManagerVid from "../assets/project_videos/PasswordManagerVid.mp4";
import SearchEngineVid from "../assets/project_videos/SearchEngineVid.mp4";
import SnakeXenziaVid from "../assets/project_videos/SnakeXenziaVid.mp4";
import TMTidoVid from "../assets/project_videos/TMTidoVid.mp4";

const projectList = [
  {
    id: 1,
    className:
      "pframe odd absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10",
    thumbnail: SearchEngine,
    video: SearchEngineVid,
  },
  {
    id: 2,
    className:
      "pframe even mt-20 md:mt-10 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: ImageGallery,
    video: gallerVideo,
  },
  {
    id: 3,
    className:
      "pframe odd mt-40 md:mt-20 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: EmailPasswordValidator,
    video: EmailPassValidatorVid,
  },
  {
    id: 4,
    className:
      "pframe even mt-60 md:mt-30 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: PasswordManager,
    video: PasswordManagerVid,
  },
  {
    id: 5,
    className:
      "pframe odd mt-80 md:mt-40 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: TaskManager,
    video: TMTidoVid,
  },
  {
    id: 6,
    className:
      "pframe even mt-100 md:mt-50 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: AdBanner,
    video: AdBannerVid,
  },
  {
    id: 7,
    className:
      "pframe odd mt-120 md:mt-60 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden",
    thumbnail: SnakeXenzia,
    video: SnakeXenziaVid,
  },
];

const ProjectSlides = () => {
  const [activeId, setActiveId] = useState(null);
  const [mobileActiveId, setMobileActiveId] = useState(null);
  const containerRef = useRef(null);

  const hoverTimeout = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      mobileActiveId !== null &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setMobileActiveId(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [mobileActiveId]);


  const handleVideoHover = (id) => {
    const video = videoRefs.current[id];
    if (video) video.play();
  };

  const handleVideoLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleMouseEnter = (id) => {
    hoverTimeout.current = setTimeout(() => {
      setActiveId(id);
    }, 400);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setActiveId(null);
  };

  return (
    <div className="relative h-[600px] md:h-[850px] overflow-visible">
      {projectList.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => {
            handleMouseEnter(project.id);
            handleVideoHover(project.id);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            handleVideoLeave(project.id);
          }}
          ref={containerRef}
          className={`transform-gpu will-change-transform transition-all duration-300 ease-out ${
            project.className
          } ${activeId === project.id ? "-translate-y-5" : ""} ${
            mobileActiveId === project.id ? "z-50 scale-103" : "z-0"
          }`}
          onClick={() => {
            if (window.innerWidth < 768) {
              setMobileActiveId((prev) =>
                prev === project.id ? null : project.id,
              );
            }
          }}
        >
          <video
            ref={(el) => (videoRefs.current[project.id] = el)}
            src={project.video}
            muted
            loop
            playsInline
            poster={project.thumbnail}
            className="vdo w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectSlides;

// import React, { useState, useRef } from "react";

// import SnakeXenzia from "../assets/project_thumbnails/SnakeXenzia_thumbnail.png";
// import TaskManager from "../assets/project_thumbnails/TMtido_thumbnail.png";
// import ImageGallery from "../assets/project_thumbnails/gallery_thumbnail.png";
// import PasswordManager from "../assets/project_thumbnails/pass-manager-pic.jpg";
// import EmailPasswordValidator from "../assets/project_thumbnails/EPvalidator_thumbnail.png";
// import AdBanner from "../assets/project_thumbnails/AdBanner_thumbnail.png";
// import SearchEngine from "../assets/project_thumbnails/SearchEngine_thumbnail.png";

// import gallerVideo from "../assets/project_videos/GalleryVid.mp4";
// import AdBannerVid from "../assets/project_videos/AdBannerVid.mp4";
// import EmailPassValidatorVid from "../assets/project_videos/EmailPassValidatorVid.mp4";
// import PasswordManagerVid from "../assets/project_videos/PasswordManagerVid.mp4";
// import SearchEngineVid from "../assets/project_videos/SearchEngineVid.mp4";
// import SnakeXenziaVid from "../assets/project_videos/SnakeXenziaVid.mp4";
// import TMTidoVid from "../assets/project_videos/TMTidoVid.mp4";

// const projectList = [
//   { id: 1, className: "pframe odd absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10", thumbnail: SearchEngine, video: SearchEngineVid },
//   { id: 2, className: "pframe even mt-20 md:mt-10 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden", thumbnail: ImageGallery, video: gallerVideo },
//   { id: 3, className: "pframe odd mt-40 md:mt-20 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden", thumbnail: EmailPasswordValidator, video: EmailPassValidatorVid },
//   { id: 4, className: "pframe even mt-60 md:mt-30 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden", thumbnail: PasswordManager, video: PasswordManagerVid },
//   { id: 5, className: "pframe odd mt-80 md:mt-40 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden", thumbnail: TaskManager, video: TMTidoVid },
//   { id: 6, className: "pframe even mt-100 md:mt-50 absolute md:h-[350px] md:w-[600px] bg-amber-300 rounded-2xl hover:z-10 overflow-hidden", thumbnail: AdBanner, video: AdBannerVid },
//   { id: 7, className: "pframe odd mt-120 md:mt-60 absolute md:h-[350px] md:w-[600px] bg-amber-600 rounded-2xl hover:z-10 overflow-hidden", thumbnail: SnakeXenzia, video: SnakeXenziaVid },
// ];

// const ProjectSlides = () => {
//   const [activeId, setActiveId] = useState(null);
//   const hoverTimeout = useRef(null);
//   const videoRefs = useRef({});

//   const handleVideoHover = (id) => {
//     const video = videoRefs.current[id];
//     if (video) video.play();
//   };

//   const handleVideoLeave = (id) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       video.pause();
//       video.currentTime = 0;
//     }
//   };

//   const handleMouseEnter = (id) => {
//     hoverTimeout.current = setTimeout(() => {
//       setActiveId(id);
//     }, 400);
//   };

//   const handleMouseLeave = () => {
//     clearTimeout(hoverTimeout.current);
//     setActiveId(null);
//   };

//   return (
//     <div className="relative h-[600px] md:h-[850px] overflow-visible">
//       {projectList.map((project) => (
//         <div
//           key={project.id}
//           onMouseEnter={() => {
//             handleMouseEnter(project.id);
//             handleVideoHover(project.id);
//           }}
//           onMouseLeave={() => {
//             handleMouseLeave();
//             handleVideoLeave(project.id);
//           }}
//           className={`will-change-transform transition-transform duration-500 ease-out md:${project.className} ${
//             activeId === project.id ? "-translate-y-5" : ""
//           }`}
//         >
//           <video
//             ref={(el) => (videoRefs.current[project.id] = el)}
//             src={project.video}
//             muted
//             loop
//             playsInline
//             poster={project.thumbnail}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectSlides;
