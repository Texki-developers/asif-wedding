import React, { useCallback, useEffect, useRef, useState } from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import Header from "../Header/Header";
import Button from "../Basic/Button/Button";

export default function Banner() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.muted = false; // unmute
        audioRef.current.play(); // play with sound
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <Center className="h-[60vh] sm:h-[100vh] p-[1rem]">
      <VStack
        className="w-[100%] h-[100%] rounded-[15px] items-center justify-center gap-[2rem] px-[1rem]"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(188,238,245,0.5) 100%), url('/Assets/asif_banner.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <audio ref={audioRef} autoPlay muted hidden>
          <source src="/Assets/audio/sumamil.mp3" type="audio/mp3" />
        </audio>
        {/* <Header /> */}
        <VStack>
          <h1 className="text-center font-madi text-white banner-title">
            Pookie Asif & Pookie Riya
          </h1>
          <p className="banner-subtitle text-white text-center">
            Asif's Kalyanam!!
          </p>
        </VStack>
        <Button className="btn-primary" onClick={handlePlay}>
          {isMuted
            ? " Asif's Favorite Song Kelkku"
            : "Asif's favorite Song Kelkkanda"}
        </Button>
      </VStack>
    </Center>
  );
}
