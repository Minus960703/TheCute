import { Map } from '../components/atoms/Map'
import { GetServerSideProps } from 'next'

function Home({ response } :any) {
  console.log(response)
  return (
    <>
      TheCute
    </>
  )
}

export const getServerSideProps :GetServerSideProps = async (context) => {
  const response = await (await fetch('http://localhost:3000/api/filteringAccommodationList')).json();
  return { props: { response }}
}

export default Home;