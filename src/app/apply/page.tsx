import type { Metadata } from "next";

import { ApplyForm } from "@/components/apply/apply-form";

export const metadata: Metadata = {
  title: "상담·접수",
  description:
    "상담, 프로그램 등록, 대기 접수를 온라인으로 신청하세요.",
};

export default function ApplyPage() {
  return <ApplyForm />;
}
