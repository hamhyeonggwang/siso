export type YoutubeVideo = {
  id: string;
  title: string;
  publishedAt?: string;
};

/**
 * 홈 유튜브 섹션 및 시소광장 유튜브 페이지에서 사용할 영상 목록.
 * id: YouTube 영상 ID (URL의 v= 뒤 값)
 */
export const youtubeVideos: YoutubeVideo[] = [
  // 아래 예시를 실제 유튜브 영상 ID와 제목으로 교체하세요.
  // YouTube URL https://www.youtube.com/watch?v=XXXXX 에서 XXXXX 부분이 ID입니다.
  // { id: "XXXXX", title: "영상 제목", publishedAt: "2025-03" },
];

/** 사이트 공통 연락처·법적 정보 (푸터·CTA 등에서 사용) */
export const siteConfig = {
  /** 카카오 채널·오픈채팅 URL — 실제 채널로 교체하세요 */
  kakaoChannelUrl: "https://pf.kakao.com/_sisochild",

  organizationName: "시소감각통합상담연구소",
  brandTagline: "Sensory Integration toward Social and Occupational being",
  representatives: "김미선, 지석연",
  addressLine: "서울특별시 마포구 서강로 9길 56 송우빌딩 5층",
  phoneDisplay: "02) 325-1150",
  phoneTel: "tel:+8223251150",
  faxDisplay: "02) 322-1160",
  email: "sisochild@gmail.com",
  emailMailto: "mailto:sisochild@gmail.com",
  businessNumber: "105-91-35006",
  hours: "" as string,

  copyrightStartYear: 2019,

  /** SNS 채널 — 빈 문자열이면 푸터에 표시 안 됨 */
  instagramUrl: "",
  youtubeUrl: "",
  naverBlogUrl: "",

  copyrightLine: "Copyright © 2019 SISO CO.,LTD. All Rights Reserved.",

  legal: {
    privacy: "https://www.sisochild.com/html/etc/privacy.php",
    terms: "https://www.sisochild.com/html/etc/agreement.php",
    emailRefusal: "https://www.sisochild.com/html/etc/email.php",
  },
} as const;
