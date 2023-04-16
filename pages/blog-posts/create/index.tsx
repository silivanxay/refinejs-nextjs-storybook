import { HeadlessCreateInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";

export default function BlogPostCreate() {
  return <HeadlessCreateInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
