// Props Concept 
import react from "react"

// Parent Component
function Booklist()
{
  return(
    <div>
      <Book title="AniBird" author="Reddy" age={22}/>
      <Book title="Kaptureit" author="Chaithanya" age={20} />
    </div>
  )
}


// Child Component
function Book(props)
{
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <h2>{props.age}</h2>
    </div>
  )
}


export default Booklist;