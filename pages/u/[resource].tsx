import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

interface Resource extends ParsedUrlQuery {
  id: string;
}

export default function Resource({ resource }: { resource: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/university/${resource}.pdf`);
  }, [router, resource]);
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resource = context.params as Resource;

  return {
    props: {
      ...resource,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arr = ["foodle", "home", "chat", "peva", "hash", "color"];
  const paths = arr.map((res) => {
    return {
      params: { resource: res },
    };
  });
  return { paths, fallback: false };
};
