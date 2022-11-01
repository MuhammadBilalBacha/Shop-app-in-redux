import React, { useEffect, useState } from "react";
import { cartAction } from "../../Redux-Store/SliceFunction/Slice";
import Loader from "./Loader";
import "./Products.css";
import { useDispatch } from "react-redux/es/exports";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const myData = await response.json();

      setProducts(myData);
      // console.log(myData);
      if (myData) {
        return setLoading(true);
      }
    };

    fetchProducts();
  }, []);

  const cartHandler = (data) => {
    dispatch(cartAction.addCart(data));
    toast.success("Product added to your cart !");
  };

  return (
    <div className="mt-5">
      <h2 className="text-center py-5">My Products</h2>

      <div className="container py-5">
        <div className="row">
          {loading ? (
            products.map((data) => {
              const title = data.title.slice(0, 15);
              // console.log(data.title.slice(0, 12));/
              return (
                <div className="col-md-4 mb-4" key={data.id}>
                  <div className="myCard">
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body mx-auto">
                      <h3 className="card-title">{title}</h3>
                      <h5 className="text-center text-danger">${data.price}</h5>
                      <p className="card-text"></p>
                      <div className="text-center">
                        <button
                          href="/"
                          onClick={() => cartHandler(data)}
                          className="btn btn-success"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
        {/* <div className="row">
          <div className="mybutton ">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
