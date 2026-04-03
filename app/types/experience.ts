type ExperienceType = {
  title: string;
  company?: string;
  period: string;
  description: string;
  tech?: string[];
};

type JobExperience = ExperienceType & {
  type: "job";
  responsibilities: string[];
};

type EducationExperience = ExperienceType & {
  type: "education";
  learnings: string[];
};

type ProjetExperience = ExperienceType & {
  type: "project";
  collaboration?: string[];
};

export type ExperiencesType =
  | JobExperience
  | EducationExperience
  | ProjetExperience;

export type ExperienceSectionType = {
  sectionTitle: string;
  experiences: ExperiencesType[];
};
