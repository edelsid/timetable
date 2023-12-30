import { useState } from "react"

export const Form = ({ setEntry }) => {
   const [data, setData] = useState({
      dateRaw: '',
      date: '',
      dist: '',
   });

   const {date, dist} = data;

   const submitChange = (e) => {
      e.preventDefault();
      const verified = checkData({ data });
      setEntry(verified);
   }

   const inputChange = (e) => {
      const {name, value} = e.target;
      setData ((prevForm) => ({
         ...prevForm,
         date: name === 'date' ? value : prevForm.date,
         dist: name === 'dist' ? value : prevForm.dist,
      }));
   }

   const checkData = () => {
      let verified;
      const regDist = /^[0-9]{1,2}.?[0-9]?$/i;
      const dateArr = date.split('.');
      const mmddyyyy = `${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`;
      const regDate = new Date(mmddyyyy);

      if (!date || !dist) {
         return verified = {
         dateRaw: '',
         date: '',
         dist: '',
      }} else if (!regDist.test(dist) ||
      (!(regDate instanceof Date) && !(isNaN(regDate)))) {
         alert ('error');
         return;
      }

      verified = {
         dateRaw: regDate,
         date: padDate(date),
         dist: parseFloat(dist),
      };
      return verified;
   }

   const padDate = (date) => {
      const dateArr = date.split('.');
      dateArr[0] = dateArr[0].padStart(2, 0);
      dateArr[1] = dateArr[1].padStart(2, 0);
      const paddedDate = dateArr.join('.');

      return paddedDate;
   }

   return (
   <form className="inputForm" onSubmit={submitChange}>
      <div className="wrapper dateInput">
         <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
         <input 
            className="field"
            id="date"
            name="date"
            value={date}
            onChange={inputChange}>
         </input>
      </div>
      <div className="wrapper distInput">
         <label htmlFor="dist">Пройдено км</label>
         <input
            className="field"
            id="dist"
            name="dist"
            value={dist}
            onChange={inputChange}>
         </input>
      </div>
      <button className="btn" type="submit">OK</button>
   </form>
   );
}