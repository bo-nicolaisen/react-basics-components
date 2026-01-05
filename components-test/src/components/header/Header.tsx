import "./Header.css"
import { Logo } from "../logo/logo.tsx"  


import {SiteNavigation} from "../site_navigation/SiteNavigation.tsx"
export function Header() {
  return (
    <header className="Main-header">
      <Logo />
      <h1>React rocks</h1>
      <SiteNavigation />
    </header>
  )
}
