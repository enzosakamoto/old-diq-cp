import Head from "next/head";

export default function PageName({ title, content }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
    </>
  );
}
