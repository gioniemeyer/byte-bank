"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box } from "@mui/material";
import Image from "next/image";

export default function WelcomeImages() {
  const { isMobile, isTablet } = useResponsive();

  // Configurações das imagens
  const images = [
    // Pixel superior tablet
    isTablet && {
      key: "pixel-top-tablet",
      src: "/Pixels1.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "180px",
        height: "177px",
      },
    },
    // Pixel superior mobile
    isMobile && {
      key: "pixel-top-mobile",
      src: "/Pixels1.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "144px",
        height: "142px",
      },
    },
    // Pixel inferior tablet
    isTablet && {
      key: "pixel-bottom-tablet",
      src: "/Pixels.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "180px",
        height: "177px",
      },
    },
    // Pixel inferior mobile
    isMobile && {
      key: "pixel-bottom-mobile",
      src: "/Pixels.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "144px",
        height: "142px",
      },
    },
    // Ilustração
    (isTablet || isMobile) && {
      key: "illustration",
      src: "/Ilustração1.png",
      alt: "ilustração",
      sx: {
        position: "absolute",
        bottom: "34px",
        left: isTablet ? "32px" : "14px",
        width: "283px",
        height: "228px",
      },
    },
  ].filter(Boolean);

  const filteredImages = images.filter(Boolean) as {
    key: string;
    src: string;
    alt: string;
    sx: object;
  }[];

  return (
    <>
      {filteredImages.map((img) => (
        <Box key={img.key} sx={img.sx}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      ))}
    </>
  );
}
