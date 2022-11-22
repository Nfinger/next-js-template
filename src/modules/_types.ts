export enum PAGE_TYPE {
  HOME = "homepage",
}

interface Flow {
  placement: string;
  value: string;
}

export interface PageConfigOptions {
  template: string;
  content: string;
  flows: Flow[];
}

export interface PageConfig {
  pageType: string;
  name: string;
  description: string;
  config: PageConfigOptions;
}

interface ConfigOptions {
  pdb: {
    description: string;
    sortPriority: string;
    theme: string;
  };
  pages: PageConfig[];
}

export interface Config {
  configId: string;
  description: string;
  labels: string[];
  active: boolean;
  config: ConfigOptions;
}

export interface ConfigCache {
  [key: string]: Config;
}
