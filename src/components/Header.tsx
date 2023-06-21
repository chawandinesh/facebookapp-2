const Header = () => {
  return (
    <>
      <header className="header-class">
        <div className="container-1">
          <h1 className="title-header">facebook</h1>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="container-2">
          <i className="fa-brands fa-facebook-messenger"></i>
          <i className="fa-solid fa-bell solidbtn"></i>
          <div className="profile-pic">
            <img
              className="profile-img"
              src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VFpusCRxd3EAX_rCZuF&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfC3GEd8CRB7IdGJsbOheJ0zR0qG59YHGl4B7wWbUhtYHg&oe=648DF0DD"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
