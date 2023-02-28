import Navbar from './navbar'
import Footer from './footer'
import Prefooter from './prefooter'
import Banner from './banner'
import Ul from './ul'

export default function Layout( { children } ) {
    return (
        <>
            <Navbar />
            <Ul />
            <Banner />
            <main>{ children }</main>
            <Prefooter />
            <Footer />
        </>
    )
}