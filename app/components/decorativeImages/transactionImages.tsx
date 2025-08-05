"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box } from "@mui/material";
import Image from "next/image";

export default function TransactionImages() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Configurações das imagens
  const images = [
    // Pixel superior (tablet e desktop)
    (isTablet || isDesktop) && {
      key: "pixel-top-tablet-desktop",
      src: "/Pixels3.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "180px",
        height: "177px",
      },
    },
    // Pixel superior (mobile)
    isMobile && {
      key: "pixel-top-mobile",
      src: "/Pixels3.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "146px",
        height: "144px",
      },
    },
    // Pixel inferior (mobile)
    isMobile && {
      key: "pixel-bottom-mobile",
      src: "/Pixels2.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "146px",
        height: "144px",
      },
    },
    // Pixel inferior (tablet e desktop)
    (isTablet || isDesktop) && {
      key: "pixel-bottom-tablet-desktop",
      src: "/Pixels2.png",
      alt: "pixels",
      sx: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "180px",
        height: "177px",
      },
    },
    // Ilustração (mobile e tablet)
    !isDesktop && {
      key: "illustration",
      src: "/Ilustração2.png",
      alt: "ilustração",
      sx: {
        position: "absolute",
        bottom: "28px",
        right: "16px",
        width: isTablet ? "327px" : "280px",
        height: "231px",
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
