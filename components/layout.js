import Navbar from './navbar'
import Footer from './footer'
import Ul from './ul'

export default function Layout( { children } ) {
    return (
        <>
            <Navbar />
            <Ul/>
            <main>{ children }</main>
            <Footer />
        </>
    )
}