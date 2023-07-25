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
          <a href="/profile"><div className="profile-pic">
            <img
              className="profile-img"
              src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/316296609_666230721811653_2313825525741665355_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j1GQgvUvXuYAX8bkP2-&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfDlybcm2Av_6dtYK0ye-LUuuvPYdKEBLR_jpfdIyYkC7w&oe=64B57DDD" alt="PavanImg"
            />
          </div></a>
        </div>
      </header>
    </>
  );
};

export default Header;
