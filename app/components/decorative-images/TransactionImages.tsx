"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { useSidebar } from "@/app/contexts/SidebarContext";
import { Box } from "@mui/material";
import Image from "next/image";

export default function TransactionImages() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { selectedItem } = useSidebar();

  const images = [
    isTablet || isDesktop
      ? {
          key: "pixel-top-tablet-desktop",
          src: "/images/Pixels3.png",
          alt: "pixels",
          width: 180,
          height: 177,
          sx: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "180px",
            height: "177px",
          },
        }
      : null,

    isMobile
      ? {
          key: "pixel-top-mobile",
          src: "/images/Pixels3.png",
          alt: "pixels",
          width: 146,
          height: 144,
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "146px",
            height: "144px",
          },
        }
      : null,

    isMobile
      ? {
          key: "pixel-bottom-mobile",
          src: "/images/Pixels2.png",
          alt: "pixels",
          width: 146,
          height: 144,
          sx: {
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "146px",
            height: "144px",
          },
        }
      : null,

    isTablet || isDesktop
      ? {
          key: "pixel-bottom-tablet-desktop",
          src: "/images/Pixels2.png",
          alt: "pixels",
          width: 180,
          height: 177,
          sx: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "180px",
            height: "177px",
          },
        }
      : null,

    !isDesktop &&
    (selectedItem === "Início" || selectedItem === "Transferências")
      ? {
          key: "illustration",
          src: "/images/Ilustração2.png",
          alt: "ilustração",
          width: isTablet ? 327 : 280,
          height: 231,
          sx: {
            position: "absolute",
            bottom: "28px",
            right: "16px",
            width: isTablet ? "327px" : "280px",
            height: "231px",
          },
        }
      : null,
  ].filter(Boolean) as Array<{
    key: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sx: object;
  }>;

  return (
    <>
      {images.map((img) => (
        <Box key={img.key} sx={img.sx}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            style={{ objectFit: "contain", color: "transparent" }}
            priority
          />
        </Box>
      ))}
    </>
  );
}
