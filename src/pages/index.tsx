import { Map } from '../components/atoms/Map'
import { GetServerSideProps } from 'next'
import { SeoHead } from '../components/atoms/SeoHead'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Home({ response } :any) {
  const router = useRouter();
  const [modal, setModal] = useState({active: false, imgUrl: ''});
  const handlerModal = (imgUrl :string) => {
    setModal({...modal, active: !modal.active, imgUrl});
  }
  return (
    <>
      <SeoHead title='THE 귀여워' />
      <section className='flex__area'>
        <article className='banner'>
        </article>
      </section>
      <Map address='서울특별시 마포구 어울마당로 44-1 라꼼마빌딩 2층'/>
      <style jsx>{`
        .flex__area {
          background-color: white;
          display: flex;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          border-bottom: 1px solid #ccc;
        }
        .banner {
          width: 100%;
          background-color: #eee;
          min-height: 275px;
          height: 40vh;
        }
      `}</style>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
  return { props: { response } };
}

export default Home;