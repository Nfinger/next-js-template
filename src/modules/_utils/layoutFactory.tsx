import { createElement } from "react";
import Components from "../../components";
import Layouts from "../../layouts";
import type { PageConfig, Config } from "../_types";
import type { PAGE_TYPE } from "../_types";

export type TemplatePathValueMapper = (
  pageConfig: PageConfig
) => ((props: any) => JSX.Element) | undefined;

export type ContentPathValueMapper = (
  pageConfig: PageConfig
) => Record<string, (() => JSX.Element) | undefined>;

export interface PathValueMappers {
  template: TemplatePathValueMapper;
  content: ContentPathValueMapper;
}

export interface PathParams {
  template?: string;
  content?: string;
}

export interface MappedPathResult {
  template?: string;
  content?: string;
}

/**
param -> resolver map
 */
const mappers: PathValueMappers = {
  template: ({ pageType }) => {
    const templateComponent = Layouts[pageType];
    return templateComponent;
  },
  content: ({ config: { content, flows } }) => {
    const contentComponent = Components[content];
    const flowComponents = flows.reduce((acc, { value, placement }) => {
      const flowComponent = Components[value];
      return { ...acc, [placement]: flowComponent };
    }, {});
    return {
      content: contentComponent,
      ...flowComponents,
    };
  },
};

/**
@param config
 */
export const mapConfigToTemplate = (
  config: Config,
  pageType: PAGE_TYPE
): JSX.Element | null => {
  if (!config) {
    return null;
  }

  const pageConfig = config.config.pages.find((p) => p.pageType === pageType);

  if (!pageConfig) {
    throw new Error(`No page config found for page type: ${pageType}`);
  }

  const Template = mappers.template(pageConfig);

  if (!Template) {
    throw new Error(`No template found for page type: ${pageType}`);
  }

  const content = mappers.content(pageConfig);
  return createElement(Template, { ...content });
};
