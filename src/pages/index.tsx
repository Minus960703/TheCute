import { Map } from '../components/atoms/Map'
import { GetServerSideProps } from 'next'
import { SeoHead } from '../components/atoms/SeoHead'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Banner from 'public/open.jpg'

function Home({ response } :any) {
  const router = useRouter();
  const [modal, setModal] = useState({active: false, imgUrl: ''});
  const handlerModal = (imgUrl :string) => {
    setModal({...modal, active: !modal.active, imgUrl});
  }
  return (
    <>
      <SeoHead title='THE 귀여워' />
      <section className='home'>
        <article className='banner'>
          <Image src={Banner} layout='fill' alt='banner' priority/>
        </article>
      </section>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
  return { props: { response } };
}

export default Home;