import Head from 'next/head';
import React from 'react'

interface HeadProps {
  title: string;
  author? :string;
}

const SeoHead = ({title}: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="google-site-verification" content='X3tjBCoHdIZb89hscOuUD6-xep1sGtP053Y1t_GzqLE' />
      <meta name="description" content={'더 귀여워 홍대점 강아지 카페'} />
      <meta name="keywords" content={'dog, 강아지, 카페, 홍대, 더귀여워, 더 귀여워, 강아지카페, cat, 고양이, 고양이카페'} />
      <meta property="og:title" content={title} />
      {/* <meta property="og:image" content={post.thumbnail} /> */}
      {/* <meta property="og:description" content={post.content} /> */}
    </Head>
  )
}

export { SeoHead }