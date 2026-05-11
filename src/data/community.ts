import type { CommunityPost } from "@/types/content";

export const communityPosts: CommunityPost[] = [
  {
    id: "n1",
    title: "여름 학기 접수 마감 6월 9일",
    excerpt: "랩 · 학교준비 과정 7월 시작.",
    category: "notice",
    tags: ["프로그램"],
    date: "2026-05-02",
    status: "pinned",
    imageHint: "아침",
  },
  {
    id: "n2",
    title: "채용 · 소아작업치료사 (감통)",
    excerpt: "하이브리드 · 학령 집중.",
    category: "recruitment",
    tags: ["채용"],
    date: "2026-04-28",
    status: "published",
    imageHint: "스튜디오",
  },
  {
    id: "n3",
    title: "부모 교육 · 공동조절 오피스아워",
    excerpt: "방과 후 전환 가상 라운지.",
    category: "parent_education",
    tags: ["라이브"],
    date: "2026-04-19",
    status: "published",
    imageHint: "에디토리얼",
  },
  {
    id: "n4",
    title: "후기 · 과학 시간에 손을 들었어요",
    excerpt: "초5 가족 · 참여 중심 IEP 대화.",
    category: "review",
    tags: ["가족"],
    date: "2026-04-12",
    status: "published",
    imageHint: "노트",
  },
  {
    id: "n5",
    title: "스토리 · 마트 통로에서",
    excerpt: "일상 속 조절 연습을 존중하게 담은 현장 노트.",
    category: "story",
    tags: ["OT"],
    date: "2026-03-30",
    status: "published",
    imageHint: "마켓",
  },
];

export const communityCategoryLabels: Record<
  CommunityPost["category"],
  string
> = {
  notice: "공지",
  recruitment: "채용",
  parent_education: "부모 교육",
  review: "후기",
  story: "스토리",
};
