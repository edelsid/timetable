import { Entry } from "./Entry/Entry"

export const Display = (props) => {
   return(
   <div className="display">
      <ul className="categories">
         <li className="name">Дата (ДД.ММ.ГГ)</li>
         <li className="name">Пройдено км</li>
         <li className="name">Действия</li>
      </ul>
      <ul className="entries">
         {props.data.map((item) => (
            <Entry item={item} key={item.id} onDelete={props.onDelete}/>
         ))}
      </ul>
   </div>
   )
}