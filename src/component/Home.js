import React, { useState } from "react";
import date from '../data';

const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
        amount = 1;
    }
    if(count > date.length){
        amount = date.length;
    }
    setText(date.slice(0,amount));
  };
  return (
    <section className="section-center">
      <h3>Generate better LOREM-IPSUM</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {
            text.map((item,index)=>{
                return <p key={index}>{item}</p>
            })
        }
      </article>
    </section>
  );
};

export default Home;
