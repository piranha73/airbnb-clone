import Link from "next/link"

const Navbar = props => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/flats">flats</Link>
    </div>
  )
}

export default Navbar