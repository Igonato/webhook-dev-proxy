import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Mail } from "lucide-react"; // Assuming you're using lucide-react for icons

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
            ],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
        asChild: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base story
export const Default: Story = {
    args: {
        children: "Button",
        variant: "default",
        size: "default",
    },
};

// Variant stories
export const Destructive: Story = {
    args: {
        children: "Destructive",
        variant: "destructive",
    },
};

export const Outline: Story = {
    args: {
        children: "Outline",
        variant: "outline",
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const Ghost: Story = {
    args: {
        children: "Ghost",
        variant: "ghost",
    },
};

export const Link: Story = {
    args: {
        children: "Link",
        variant: "link",
    },
};

// Size stories
export const Small: Story = {
    args: {
        children: "Small",
        size: "sm",
    },
};

export const Large: Story = {
    args: {
        children: "Large",
        size: "lg",
    },
};

// Icon button examples
export const IconButton: Story = {
    args: {
        size: "icon",
        children: <Mail />,
    },
};

// State examples
export const Disabled: Story = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};

// Example with icon and text
export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail />
                Login with Email
            </>
        ),
    },
};

// Story showcasing all variants
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
            <div className="flex gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                    <Mail />
                </Button>
            </div>
        </div>
    ),
};
