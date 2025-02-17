export const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.5) => {
  const isX = direction === "left" || direction === "right";
  const distance = 100 * (direction === "left" || direction === "up" ? 1 : -1);

  return {
    hidden: { x: isX ? distance : 0, y: !isX ? distance : 0, opacity: 0 },
    show: {
      x: 0, y: 0, opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1, opacity: 1,
    transition: { type: "tween", delay, duration, ease: "easeOut" },
  },
});

export const slideIn = (direction = "left", type = "tween", delay = 0, duration = 0.5) => {
  const values = { left: "-100%", right: "100%", up: "100%", down: "100%" };
  const isX = direction === "left" || direction === "right";

  return {
    hidden: { x: isX ? values[direction] : 0, y: !isX ? values[direction] : 0 },
    show: {
      x: 0, y: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
