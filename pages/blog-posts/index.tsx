import { GetServerSideProps } from "next";
import { BlogPostList } from "@components/blog-posts";

export default function BlogPostListPage() {
  return <BlogPostList />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
