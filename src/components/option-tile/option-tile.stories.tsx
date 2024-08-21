import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { OptionTile } from './option-tile';
import Text from '../text';
import Checkbox from '../checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/OptionTile',
  component: OptionTile,
  render: ({ children }) => (
    <div style={{ padding: 24 }}>
        <OptionTile>
            {children}
        </OptionTile>
    </div>
  )
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof OptionTile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: (<>
          <Text variant="regular">21323</Text>
          <Checkbox isChecked isSquare onChange={() => {}} />
        </>
    ),
  },
};
