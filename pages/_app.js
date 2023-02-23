import '../styles/globals.css'
import { Aladin } from '@next/font/google'
const al = Aladin( { subsets: [ 'latin' ] , weight:'400' } ) 

export default function App( { Component, pageProps } ) {
  return(
  <>
    <style jsx global>{ `
        h1 {
          font-family: ${ al.style.fontFamily };
        }
        span {
          font-family: ${ al.style.fontFamily };
        }
      `}</style>

    <Component { ...pageProps } />
    </>
  )
}
