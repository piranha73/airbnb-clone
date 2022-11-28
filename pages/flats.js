import flatsController from "../controllers/flatsController"

const Flats = props => {
  return (
    <ul>
      {props.flats}
    </ul>
  )
}

export function getServerSideProps () {
  const flats = flatsController.all()
  return {
    props: {flats}
  }
}

export default Flats