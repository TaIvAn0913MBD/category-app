// const List = ({ info }) => {
//   const { title, description, category, thumbnail, id } = info;
//   return (
//     <div className="border">
//       <div className="title">{title}</div>
//       <h3 className="description">{description}</h3>
//       <div className="category">{category}</div>
//       <div>{id}</div>
//       <img className="thumbnail" src={thumbnail} />
//     </div>
//   );
// };
// export default List;
export const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt="Product Image"
        className="product-image"
      />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-category">Category: {product.category}</p>
        <a href="#" className="product-button">
          Buy
        </a>
      </div>
    </div>
  );
};
