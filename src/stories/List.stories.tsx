import { RefineWithoutLayout } from "../../.storybook/preview";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogPostList } from "../components/blog-posts";

export const ListBasicView: ComponentStory<typeof BlogPostList> = (args) => <BlogPostList />;

export default {
    title: "Components / Basic Views",
    component: BlogPostList,
    argTypes: {
        title: {
            type: "string",
        },
    },
    decorators: [(Story) => RefineWithoutLayout(Story)],
} as ComponentMeta<typeof BlogPostList>;


