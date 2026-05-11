import type { Metadata } from "next";
import { EducationShop } from "@/components/sections/education-shop";

export const metadata: Metadata = {
  title: "교육 및 컨설팅",
  description: "부모와 전문가를 위한 시소의 교육·컨설팅 프로그램을 소개합니다.",
};

export default function EducationPage() {
  return <EducationShop />;
}
