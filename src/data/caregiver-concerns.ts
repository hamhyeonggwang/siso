import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Sparkles,
  Target,
  UsersRound,
  Shirt,
  CloudSun,
} from "lucide-react";

export type CaregiverConcern = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  Icon: LucideIcon;
};

export const caregiverConcerns: CaregiverConcern[] = [
  {
    id: "school",
    title: "학교생활이 어려워요",
    subtitle: "교실·전환·또래 속에서 버거워 보여요",
    href: "/guides/g1",
    Icon: GraduationCap,
  },
  {
    id: "sensory",
    title: "감각이 예민해요",
    subtitle: "소리·촉감·움직임에 쉽게 지치거나 흥분해요",
    href: "/guides/g2",
    Icon: Sparkles,
  },
  {
    id: "attention",
    title: "집중이 어려워요",
    subtitle: "한 가지에 오래 머물기가 힘들어 보여요",
    href: "/guides/g5",
    Icon: Target,
  },
  {
    id: "peers",
    title: "친구관계가 어려워요",
    subtitle: "놀이·대화·또래 규칙 맞추기가 어색해요",
    href: "/guides/g4",
    Icon: UsersRound,
  },
  {
    id: "daily",
    title: "일상생활이 힘들어요",
    subtitle: "옷입기·식사·정리 같은 순서가 자주 막혀요",
    href: "/guides/g2",
    Icon: Shirt,
  },
  {
    id: "emotion",
    title: "자꾸 짜증내고 무너져요",
    subtitle: "감정이 커진 뒤 오래 회복하지 못해요",
    href: "/guides/g3",
    Icon: CloudSun,
  },
];
