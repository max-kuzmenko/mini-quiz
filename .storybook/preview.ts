import type { Preview } from "@storybook/react";
import renderStory from "./render-story";

const viewports = {
  phone: {
    name: 'Phone',
    styles: {
      width: '360px',
      height: '620px',
    },
  },
};

const preview: Preview = {
  // @ts-ignore
  render: renderStory,
  parameters: {
    viewport: {
      viewports: viewports,
      defaultViewport: 'phone',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
