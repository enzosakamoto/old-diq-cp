import Head from 'next/head'

type PageNameProps = {
  title: string
  content: string
}

export default function PageName({ title, content }: PageNameProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
    </>
  )
}
