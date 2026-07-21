import type { Metadata } from "next";
import { HomePage } from "../home-page";

export const metadata: Metadata = {
  title: "Horama Apps — Ideas that deserve to exist",
  description: "An independent application incubator. Sponsor, partner with, or fund digital products with a future.",
};

export default function EnglishHome() { return <HomePage locale="en" />; }
