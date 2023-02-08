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
  const [modal, setModal] = useState({active: false, imgUrl: ''});
  const handlerModal = (imgUrl :string) => {
    setModal({...modal, active: !modal.active, imgUrl});
  }
  return (
    <>
      <SeoHead title='THE 귀여워' />
      {/* { router.pathname === '/' &&
        <HomeMenu />
      } */}
      {/* <div className='flex__area' onClick={handlerModal}> */}
      <div className='flex__area'>
        { ImageDatas && 
          ImageDatas.map((current)=><ImageFile imageUrl={current.imgUrl} key={current.id} handlerModal={()=>handlerModal(current.imgUrl)}/>)
        }
      </div>
      <Map address='서울특별시 마포구 어울마당로 44-1 라꼼마빌딩 2층'/>
      {/* {
        modal.active &&
          <Modal handlerModal={handlerModal} imgUrl={modal.imgUrl} />
      } */}
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