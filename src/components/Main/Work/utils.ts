import { WorkEnum } from "./Work";

export const RAKUTEN_WORK_INFO = {
  date: "July 2025 ",
  location: "Hybrid",
  isCurrentPosition: true,
  title: "Frontend engineer at Pagoda Labs.",
  description: [
    "Refactored legacy JavaScript codebases into scalable, well-documented React modules, improving maintainability and performance",
    "Led the upgrade from plain JavaScript to React, preserving existing functionality while enabling a seamless and efficient migration",
    "Collaborated closely with Backend, UI/UX, QA, and DevOps teams to align development efforts, resolve blockers, and accelerate delivery",
    "Maintained thorough technical documentation, including architecture decisions, data flows, and issue logs, with proper version control",
  ],
  tags: [
    "React",
    "TypeScript",
    "Material UI",
    "JavaScript",
    "React Native",
    "Storybook",
  ],
};

export const WORLD_TRIP_INFO = {
  date: "September 2024 to July 2025",
  location: "World",
  isCurrentPosition: false,
  title: "Junior React Developer",
  description: [
    "Optimized codebases to accelerate development by up to 50%, consistently delivering fully functional solutions and maintaining 100% client retention.",
  ],
  tags: ["React", "TypeScript", "JavaScript"],
};

export const SOCGEN_WORK_INFO = {
  date: "October 2019 to April 2021",
  location: "Kathmandu, Nepal",
  isCurrentPosition: false,
  title: "Web Developer",
  description: [
    "Designed and delivered bespoke enhancements for an in-house, real-time trade blotter and order book used by commodities market traders, operating within a high-pressure Agile development environment.",
    "Provided continuous live production support, including rapid issue diagnosis and deployment of time-critical hotfixes to ensure system stability and uninterrupted trading operations",
  ],
  tags: ["Trello", "Wordpress", "JavaScript", "Php", "SQL"],
};

export const getWorkBlockInfo = (company: WorkEnum) => {
  switch (company) {
    case WorkEnum.RAKUTEN:
      return RAKUTEN_WORK_INFO;
    case WorkEnum.WORLD_TRIP:
      return WORLD_TRIP_INFO;
    case WorkEnum.SOCGEN:
      return SOCGEN_WORK_INFO;
  }
};
