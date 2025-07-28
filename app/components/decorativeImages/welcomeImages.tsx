"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box } from "@mui/material";
import Image from "next/image";

export default function WelcomeImages() {
	const { isMobile, isTablet } = useResponsive();
	
  return (
		<>
      {/* Pixel superior */}
      {isTablet && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 180,
            height: 177,
          }}
        >
          <Image
            src="/Pixels1.png"
            alt="pixels"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

			{isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 144,
            height: 142,
          }}
        >
          <Image
            src="/Pixels1.png"
            alt="pixels"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {/* Pixel inferior */}
      {isTablet && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 180,
            height: 177,
          }}
        >
          <Image
            src="/Pixels.png"
            alt="pixels"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {(isMobile) && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 144,
            height: 142,
          }}
        >
          <Image
            src="/Pixels.png"
            alt="pixels"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {/* Ilustração */}
      {(isTablet || isMobile) && (
        <Box
          sx={{
            position: "absolute",
            bottom: 34,
            left: isTablet ? 32 : 14,
            width: 283,
            height: 228,
          }}
        >
          <Image
            src="/Ilustração1.png"
            alt="ilustração"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}
		</>
	);
}
