import { HeadlessEditInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";

export default function BlogPostEdit() {
  return <HeadlessEditInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
