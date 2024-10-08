import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Checkbox } from './checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  render: (props) => (
      <div style={{display: "flex", gap: "16px"}}>
          <div>
              <Checkbox {...props} />
          </div>

          <div>
              <Checkbox {...props} isChecked />
          </div>

          <div>
              <Checkbox {...props} isChecked isSquare />
          </div>
      </div>
  )

} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
    args: {
        isChecked: false,
        isSquare: false,
        onChange: fn(),
    },
};
