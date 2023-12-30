import { useState } from "react"
import { Display } from "./Display/Display"
import { Form } from "./Form/Form"

let data = [];

export const Timetable = () => {

   const [entries, setEntries] = useState(data);

   const setEntry = (value) => {
      if (!checkSameness(value)) {
         value.id = Math.floor(1 + Math.random() * (100 - 1));
         value.dist = value.dist.toFixed(1);
         data.push(value);
      }

      const newData = [...checkOrder(data)];
      setEntries(newData);
   }

   const checkSameness = (value) => {
      for (let i = 0; i < data.length; i+=1) {
         if (data[i].date === value.date) {
            const newDist = parseFloat(data[i].dist) + value.dist;
            data[i].dist = newDist.toFixed(1);
            return true;
         }
      }
      return false;
   }

   const checkOrder = () => {
      if (data.length === 0) return data;
      const orderedData = data.sort((a, b) => 
         Number(b.dateRaw) - Number(a.dateRaw));
      return orderedData;
   }

   const onDelete = (value) => {
      data = data.filter((entry) => JSON.stringify(entry.id) !== value);
      const newData = [...data];
      setEntries(newData);
   }

   return (
      <div className="timetable">
         <Form setEntry={setEntry}/>
         <Display data={entries} onDelete={onDelete}/>
      </div>
   )
}