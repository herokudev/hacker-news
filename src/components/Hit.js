import favHit from "./iconmonstr-favorite-2.svg"
import './Hit.css';

export default function Hit(props) {
    const { field1, field2 } = props;
    return (
        <div className="hit_container">
            <div className="hit_contents">
                <div className="hit_info">
                    <span><b>author: </b>{field1}</span>
                    <span>{field2}</span>
                </div>
                <div className="hit_image">
                    <img src={favHit} alt="favorite" />
                </div>
            </div>

            
      </div>
    );
  }