import "./Header.css"
import {SiteNavigation} from "../site_navigation/SiteNavigation.tsx"
export function Header() {
  return (
    <header className="Main-header">
      <h1>React rocks</h1>
      <SiteNavigation />
    </header>
  )
}
