export const softSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

export const easing = [0.22, 1, 0.36, 1] as const;

export const transitionPreset = {
  duration: 0.28,
  ease: easing,
};
