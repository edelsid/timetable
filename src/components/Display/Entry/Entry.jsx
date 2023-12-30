export const Entry = (props) => {
   
   const onClick = (e) => {
      props.onDelete(e.target.id);
   }

   return (
      <li className="entry">
         <span className="value date">{props.item.date}</span>
         <span className="value dist">{props.item.dist}</span>
         <span id={props.item.id} className="del" onClick={onClick}></span>
      </li>
   )
}