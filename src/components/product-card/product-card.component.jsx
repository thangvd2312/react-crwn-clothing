import "./product-card.styles.scss";
import Button from "../button/button.component";
const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name"></span>
        <span className="price"></span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};
export default ProductCard;
