import Image from 'next/legacy/image'
import React from 'react'
import GuideImg from 'public/guide.png'
import { GetStaticProps } from 'next'

const Guide = ({ GuideImg }: any) => {
  return (
    <div><Image src={GuideImg} layout="fill" alt="guide" priority /></div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: GuideImg
  }
};

export { Guide };