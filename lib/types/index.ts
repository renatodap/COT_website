export interface Program {
  slug: string;
  titlePT: string;
  titleEN: string;
  audience: string;
  objectivesPT: string[];
  objectivesEN: string[];
  methodPT: string;
  methodEN: string;
  includes: string[];
  heroImage: string;
  gallery?: string[];
  ctaType: 'contact' | 'whatsapp' | 'calendar';
}

export interface Case {
  athlete: string;
  level: string;
  metrics: {
    label: string;
    value: string;
  }[];
  storyPT: string;
  storyEN: string;
  heroImage: string;
}

export interface PressItem {
  titlePT: string;
  titleEN: string;
  outlet: string;
  date: string;
  url: string;
  thumb?: string;
}

export interface Project {
  namePT: string;
  nameEN: string;
  rolePT: string;
  roleEN: string;
  impactKPIs: {
    label: string;
    value: string | number;
  }[];
  bodyPT: string;
  bodyEN: string;
  images: string[];
}

export interface Policy {
  titlePT: string;
  titleEN: string;
  body: string;
}

export interface Credit {
  imageFile: string;
  creditText: string;
  licenseNote?: string;
  consent: boolean;
}