import Friends from "./Friends"

const RightSectionHome = () => {
  return (
    <div className="right-section-homepage">
      <div className="topright-section-homepage">
        <h5>Sponsored</h5>
        <div className="addtop-1">
          <img className="add-1" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_743027d7-94ca-43e1-9c04-72ad6483c226_800x.png?v=1669055392" alt="img-watch" />
          <p>boat-lifestyle.com</p>
        </div>
        <div className="addtop-1">
          <img className="add-2" src="https://cdn.shopify.com/s/files/1/0137/0292/2286/products/supernova-black_1_400x.png?v=1673500420" alt="img-watch" />
          <p>Fire-Boltt</p>
        </div>
        <Friends/>
      </div>

    </div>
  )
}

export default RightSectionHome
