import type { Assessment } from "@/types/content";

export const assessments: Assessment[] = [
  {
    id: "a1",
    name: "감각 프로필 (가족용)",
    summary: "보호자가 보는 일상 맥락의 감각 선호·민감도.",
    targetAge: "3–21세",
    estimatedTime: "45–60분",
    recommendedFor: [
      "감통 계획 전",
      "학교 전환기 과부하",
      "가족·학교 공통 언어",
    ],
    category: "sensory",
  },
  {
    id: "a2",
    name: "BOT-2",
    summary: "소·대근육 통합과 글씨·체육·일상 참여.",
    targetAge: "학령기",
    estimatedTime: "45–65분",
    recommendedFor: [
      "운동 계획 의심",
      "지원 근거 자료",
      "체육·적응 PE 협의",
    ],
    category: "motor",
  },
  {
    id: "a3",
    name: "DTVP-3",
    summary: "복사·간격·공간 추론과 연결된 시각-운동 통합.",
    targetAge: "4–12세",
    estimatedTime: "60–75분",
    recommendedFor: [
      "글씨체와 독해불일치",
      "수 시각·공간",
      "보조공학 검토",
    ],
    category: "perception",
  },
  {
    id: "a4",
    name: "실행기능 관찰 세트",
    summary: "시작·억제·전환·계획을 루틴 속에서 관찰.",
    targetAge: "8–17세",
    estimatedTime: "75–90분",
    recommendedFor: [
      "숙제 갈등",
      "청소년 다단계 전환",
      "지원 세부 조정",
    ],
    category: "executive",
  },
  {
    id: "a5",
    name: "시각 지각 스크리닝",
    summary: "배경분리·형태 일관성·시각 폐쇄와 읽기 흐름.",
    targetAge: "6–15세",
    estimatedTime: "50–65분",
    recommendedFor: [
      "줄 건너뜀",
      "검토 속도 저하",
      "시각훈련 vs 감각 구분",
    ],
    category: "perception",
  },
  {
    id: "a6",
    name: "참여 중심 OT 면접",
    summary: "의미 있는 역할·자율·환경 지원과 장벽.",
    targetAge: "학령기",
    estimatedTime: "30–45분",
    recommendedFor: ["프로그램 적합", "전환기", "현실 목표 정렬"],
    category: "participation",
  },
];

export const assessmentCategories = [
  { id: "all", label: "전체" },
  { id: "sensory", label: "감각·조절" },
  { id: "motor", label: "운동·실행" },
  { id: "perception", label: "시각 지각" },
  { id: "executive", label: "실행기능" },
  { id: "participation", label: "참여 관점" },
] as const;
