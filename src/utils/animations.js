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
  
  export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren },
    },
  });
  