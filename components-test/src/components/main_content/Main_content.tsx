import "./Main_content.css"
import { Button } from "../button/Button" 

export function Main() {

  let title = "All my cool stuff here"

 

  return (
    <main className="MainContent">
      <h1>{title}</h1>
      <Button/>
    </main>
  )
}