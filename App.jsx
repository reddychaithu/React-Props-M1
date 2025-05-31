// Props Concept Method 2
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
  console.log(props);

  const {title, author, age} = props;
  return(
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <h2>{age}</h2>
    </div>
  )
}


export default Booklist;