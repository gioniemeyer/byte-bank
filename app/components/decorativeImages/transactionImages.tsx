"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box } from "@mui/material";
import Image from "next/image";

export default function TransactionImages() {
	const { isMobile, isDesktop, isTablet } = useResponsive();
	
  return (
		<>
      {/* Pixel superior */}
      {(isTablet || isDesktop) && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <Image
            src="/Pixels3.png"
            alt="pixels"
            width={180}
            height={177}
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
          }}
        >
          <Image
            src="/Pixels3.png"
            alt="pixels"
            width={146}
            height={144}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {/* Pixel inferior */}
      {isMobile && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Image
            src="/Pixels2.png"
            alt="pixels"
            width={146}
            height={144}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {(isTablet || isDesktop) && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <Image
            src="/Pixels2.png"
            alt="pixels"
            width={180}
            height={177}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {/* Ilustração */}
      {!isDesktop && (
        <Box
          sx={{
            position: "absolute",
            bottom: 28,
            right: 16,
          }}
        >
          <Image
            src="/Ilustração2.png"
            alt="ilustração"
            width={isTablet ? 327 : 280}
            height={231}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}
		</>
	);
}
