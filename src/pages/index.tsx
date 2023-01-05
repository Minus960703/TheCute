import { Map } from '../components/atoms/Map'
import { GetServerSideProps } from 'next'

function Home({ response } :any) {
  console.log(response)
  return (
    <>
      thecute
      <Map latitude={37.4812845080678} longitude={126.952713197762}/>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (await fetch('http://localhost:4000/proxy/api/filteringAccommodationList')).json();
  return { props: { response } };
}

export default Home;