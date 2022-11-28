const Flats = props => {
  return (
    <ul>
      {props.flats}
    </ul>
  )
}

export function getServerSideProps () {
  const flats = ["flat1", "flat2"]
  return {
    props: {flats}
  }
}

export default Flats