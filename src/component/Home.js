import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import date from '../data';

const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count, 10);
    if (count <= 0) {
      amount = 1;
    }
    if (count > date.length) {
      amount = date.length;
    }
    setText(date.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Generate better LOREM-IPSUM</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
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
            text.map((item) => <p key={uuidv4}>{item}</p>)
        }
      </article>
    </section>
  );
};

export default Home;
