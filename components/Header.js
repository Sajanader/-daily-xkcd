  
import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                        <Link href='/about'><a>About us</a></Link>

                        <Link href='/'><a>Home</a></Link>

                </ul>
            </nav>
            <h1>X KCD</h1>
        </header>
    )
}