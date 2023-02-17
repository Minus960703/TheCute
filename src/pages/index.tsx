import { SeoHead } from '../components/atoms/SeoHead'
import Image from 'next/image'
import Banner from 'public/open.jpg'

function Home() {
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

export default Home;