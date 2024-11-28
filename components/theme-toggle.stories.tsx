// theme-toggle.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "./theme-provider";

const meta = {
    title: "UI/ThemeToggle",
    component: ThemeToggle,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <div style={{ padding: "1rem", minHeight: "150px" }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
