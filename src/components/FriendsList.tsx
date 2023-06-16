const Friendslist: React.FC<any> = (props) => {
    return (
      <div className="friendslist-container">
        <div className="friendslist-container1">
          <div>
            <img className="friendslist-image" src={props.img1} />
          </div>
          <div>
            <h3 className="header-container">{props.name1}</h3>
            <p className="para-container">{props.para1}</p>
          </div>
        </div>
        <div className="friendslist-container2">
          <div>
            <img className="friendslist-image" src={props.img2} />
          </div>
          <div>
            <h3 className="header-container">{props.name2}</h3>
            <p className="para-container">{props.para2}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Friendslist;
  