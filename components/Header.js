import Link from 'next/link'
import styles from '../styles.module.css'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                        <Link href='/about'>
                            <a className = {styles.link} >About us</a>
                            </Link>

                        <Link href='/'>
                            <a className = {styles.link}>Home</a></Link>

                </ul>
            </nav>
            <h1>X KCD</h1>
        </header>
    )
}