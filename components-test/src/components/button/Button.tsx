import './button.css'

export function Button() {
 
    function test() {
    console.log("test")
  }

return( 
<button className="button" onClick={test}>Click Me!</button>
)

}
