import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Text',
    component: Text,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// @ts-ignore
export const Variants: Story = {
    render: (_) => <>
        <div><Text variant="heading">This is heading text</Text></div>
        <div><Text variant="regular">This is regular text</Text></div>
    </>,
};
