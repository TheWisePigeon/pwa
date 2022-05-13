import './Header'
import Header from './Header'
import './NavigationBar'
import NavigationBar from './NavigationBar'

export default function Layout({ children }) {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <NavigationBar/>
    </>
  )
}
