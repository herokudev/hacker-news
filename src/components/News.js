import './News.css';
import logo from "./hacker-news.svg";
import Hit from "./Hit";
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
        <button className="btnSource1">
            <span>All</span>
          </button>
          <button className="btnSource2">
            <span>My faves</span>
          </button>
        <div className='news_container'>
          {hitsList.map((hit) => {
            return (
              <Hit field1={hit.author} field2={hit.story_title} />
            );
          })}
        </div>        

      </div>
    );
  }