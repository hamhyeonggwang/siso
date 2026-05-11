export type Testimonial = {
  id: string;
  quote: string;
  tag: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "학교 가기 싫어하던 아이가 조금씩 친구와 어울리기 시작했어요. 무엇부터 손댈지 함께 짚어 주셔서 마음이 가벼워졌어요.",
    tag: "학교 참여",
  },
  {
    id: "t2",
    quote:
      "식사 시간이 너무 힘들었는데, 이제는 스스로 시도하려고 해요. 집에서도 같은 언어로 말할 수 있게 되었어요.",
    tag: "일상생활",
  },
  {
    id: "t3",
    quote:
      "아이를 ‘문제’로 나누지 않고 하루하루를 이해해 주신다는 느낌이 컸어요. 상담부터 차분해서 신뢰가 갔습니다.",
    tag: "초기 상담",
  },
];
