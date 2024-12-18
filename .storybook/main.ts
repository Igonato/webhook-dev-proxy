import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        // "@chromatic-com/storybook",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-onboarding",
        "@storybook/addon-themes",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },
    staticDirs: ["..\\public"],
};
export default config;
