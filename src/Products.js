import "./Products.css"
import image from "./orig.jpg"

function Products() {
  return (
    <div className="products">
      <div className="card_product">
        <div className="card_top">
          <div className="card_image">
            <img src={image} />
          </div>
        </div>
        <div className="card_bottom">
          <div className="card_title">Iphone 17 pro</div>

          <div className="card_description">Iphone 17 PRO новый тел</div>

          <div className="card_price">1000$ </div>
        </div>
      </div>
    </div>
  );
}
export  default Products;
