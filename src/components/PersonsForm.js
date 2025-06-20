const PersonsForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>Name: <input value={props.newName} onChange={props.handleContact}/></div>
      <div>Number: <input value={props.newNumber} onChange={props.handleNumber}/> </div>
      <div><button type="submit">Add</button></div>
    </form>
  )
}
export default PersonsForm;