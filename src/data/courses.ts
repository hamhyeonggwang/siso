import type { Course } from "@/types/content";

/** UI 표시용 한글 레이블 (내부 format 키는 유지) */
export const courseFormatLabelKo: Record<Course["format"], string> = {
  workshop: "워크숍",
  seminar: "세미나",
  course: "과정",
  clinical: "케이스 스튜디오",
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "감통 참여 프로그램 설계",
    format: "workshop",
    description: "감각통합 원리를 담은 그룹 설계와 발달적 타당성.",
    dateLabel: "6월 12일 · 하이브리드",
    duration: "반나절",
    audience: "OT·PT",
    status: "upcoming",
  },
  {
    id: "c2",
    title: "평가 결과를 교실 지원으로",
    format: "seminar",
    description: "교사에게 전달 가능한 실행 계획으로 번역하기.",
    dateLabel: "7월 3일 · 라이브",
    duration: "2.5시간",
    audience: "교사·관련직",
    status: "upcoming",
  },
  {
    id: "c3",
    title: "부모 코칭 미세기술",
    format: "course",
    description: "경청·공동조절·피드백을 짧게 반복 훈련.",
    dateLabel: "상시 코호트",
    duration: "4주",
    audience: "OT·코치",
    status: "full",
  },
  {
    id: "c4",
    title: "케이스 스튜디오: 학교 거부",
    format: "clinical",
    description: "가족 목소리를 중심에 둔 다학제 라운드.",
    dateLabel: "다시보기",
    duration: "90분",
    audience: "임상가",
    status: "recording",
  },
];
