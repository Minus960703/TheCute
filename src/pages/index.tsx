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
  // const response = await (await fetch('https://thecute.netlify.app/proxy/api/filteringAccommodationList')).json();
  const response = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json();
  return { props: { response } };
}

export default Home;