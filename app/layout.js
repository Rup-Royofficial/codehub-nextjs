import './globals.css'
import { useContext } from 'react'
import AuthContext from './Helper/AuthContext'
import UnAuthenticatedHomepage from './pages/homepage/un-authenticated-homepage'
import IsAuthenticatedHomepage from './pages/homepage/is-authenticated-homepage'



export const metadata = {
  title: 'Codehub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const AuthStatus = typeof window !== 'undefined' ? useContext(AuthContext) : null;
  return (
    <AuthContext>
      <html lang="en">
        {/* <head><script src="http://localhost:8097"></script></head> */}
        <body>
          { AuthStatus && AuthStatus.authenticationStatus ? (
            <IsAuthenticatedHomepage/>
          ) : (
            <UnAuthenticatedHomepage/>
          ) }

          { AuthStatus && AuthStatus.authenticationStatus ? (
            <div>
            {children}
          </div>
          ) : (
            ''
          ) }
        </body>
      </html>
    </AuthContext>
    
  )
}
