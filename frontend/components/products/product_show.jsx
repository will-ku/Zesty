import React from "react";
import AddToCartContainer from "../cart/add_to_cart_container";
import ProductShowReviewsContainer from "../reviews/product_show_reviews_container";
import ProductPhotos from "./product_photos";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdGavel } from "react-icons/md";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true,
    // };
  }

  componentDidMount() {
    Promise.all([
      this.props.fetchProduct(this.props.match.params.productId),
      this.props.fetchAllReviews(this.props.match.params.productId),
    ]);
    //   .then(() => this.setState({ loading: false }));
    // this.setState({ loading: false });
  }

  render() {
    // if (this.state.loading === true) return null;
    if (this.props.product === undefined) return null;

    const { product } = this.props;

    const formattedPrice =
      "$" +
      product.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return (
      <div className="product-show-grid-container">
        <section className="product-show-photos">
          <ProductPhotos
            product={this.props.product}
            fetchProduct={this.props.fetchProduct}
          />
        </section>
        <section className="product-show-details">
          <div className="show-details-header">
            <h3>{this.props.product.sellerName}'s Store</h3>
            <p>
              {Math.floor(Math.random() * 1000)} sales | &nbsp;
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </p>
          </div>
          <h1>{product.name}</h1>
          <div className="show-price">{formattedPrice}</div>
          <AddToCartContainer product={this.props.product} />
          <h3>Highlights:</h3>
          <p>
            <MdGavel /> Sturdy design
          </p>
          <h3>Description:</h3>
          <p>{product.description}</p>
          <h3>Shipping and return policies</h3>
          <p>Estimated arrival: Jan 1-2099</p>
        </section>
        <section className="product-show-reviews">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam
          harum distinctio officia officiis architecto similique inventore?
          Tempore dolor exercitationem sunt similique quo, architecto, ipsum sed
          ab deleniti maiores dignissimos.
          <ProductShowReviewsContainer
            product={this.props.product}
            fetchProduct={this.props.fetchProduct}
          />
        </section>
      </div>
    );
  }
}

export default ProductShow;
