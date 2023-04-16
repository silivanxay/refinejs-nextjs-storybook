import { HeadlessShowInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";

export default function BlogPostShow() {
  return <HeadlessShowInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
