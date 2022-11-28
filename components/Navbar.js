import Link from "next/link"
import styles from './Navbar.module.css'

const Navbar = props => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/flats">flats</Link>
    </div>
  )
}

export default Navbar