"use client";
import { RecoilRoot } from "recoil";

export default function RecoilBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
