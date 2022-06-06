import './News.css';
import logo from "./hacker-news.svg";
import { useState } from 'react';

export default function News(props) {
    const { news } = props;
    const [sorce, setSource] = useState([]);
    let hitsList = news.hits;

    return (
      <div className="Front-End-Test---Home-view">
        <div class="Rectangle-2-Copy">
          <img src={logo} alt="logo" />
        </div>
        <button className="btnSource">
            <span>All</span>
          </button>
          <button className="btnSource">
            <span>My faves</span>
          </button>
        <div>
          {hitsList.map((hit) => {
            return <p>{hit.author}</p>;
          })}
        </div>        

      </div>
    );
  }