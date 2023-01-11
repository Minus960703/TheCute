import { Map } from '../components/atoms/Map'
import { GetServerSideProps } from 'next'
import { SeoHead } from '../components/atoms/SeoHead'
import { ImageFile } from '../components/atoms/ImageFile'
import { ImageDatas } from './api/imageObject'
import { useRouter } from 'next/router'
import { HomeMenu } from '../components/molecules/HomeMenu'
import { useState } from 'react'
import { Modal } from '../components/organisms/Modal'

function Home({ response } :any) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const handlerModal = () => {
    setModal(!modal);
  }
  return (
    <>
      <SeoHead title='더 귀여워' />
      { router.pathname === '/' &&
        <HomeMenu />
      }
      {/* <div className='flex__area' onClick={handlerModal}> */}
      <div className='flex__area'>
        { ImageDatas && 
          ImageDatas.map((current)=><ImageFile imageUrl={current.imgUrl} key={current.id}/>)
        }
      </div>
      {/* <ImageFile /> */}
      <Map address='서울특별시 마포구 어울마당로 44-1 라꼼마빌딩 2층'/>
      {
        modal &&
          <Modal />
      }
      <style jsx>{`
        .flex__area {
          background-color: white;
          display: flex;
          width: calc(100% - 48px);
          padding: 24px 24px;
          flex-wrap: wrap;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await (await fetch('https://thecute.netlify.app/proxy/api/filteringAccommodationList')).json();
  const response = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
  return { props: { response } };
}

export default Home;