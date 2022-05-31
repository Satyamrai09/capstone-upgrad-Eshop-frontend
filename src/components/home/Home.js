
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MediaCard from "../../common/CardNew";
import PrimarySearchAppBar from "../../common/AppBarNew";
import ToggleButtons from "../../common/ToggleButton";
import ComboBox from "../../common/AutoComplete";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");

  const classes = useStyles();
  const [productData, setProductData] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  console.log(productCategory);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProductData(res.data.products))
      .catch((err) => console.log("error:", err));
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/products/categories", {
        category: productCategory,
      })
      .then((res) => setFilteredProducts(res.data.data))
      .catch((err) => console.log("error:", err));
  }, [productCategory]);
  console.log("data--", productData);
  useEffect(() => {
    const filteredProductData = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchField);
    });
    setFilteredProducts(filteredProductData);
  }, [productData, searchField]);

  const renderProduct = () => {
    return filteredProducts.map((product) => {
      return (
        <>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <MediaCard
                  handleClick={() => {
                    navigate(`productdetail/${product._id}`);
                  }}
                  image={product.imageURL}
                  product_name={product.name}
                  price={product.price}
                  description={product.description}
                  buy="BUY"
                ></MediaCard>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </>
      );
    });
  };

  console.log("this is my searchField", searchField);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <PrimarySearchAppBar
            setSearchField={setSearchField}
          ></PrimarySearchAppBar>
          <br />
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <ToggleButtons setProductCategory={setProductCategory} />
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Grid container spacing={4}>
              <Grid item xs={1.6}></Grid>
              <Grid item xs={10.4}>
                <ComboBox />
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
          <br />
        </Grid>
        <br />
      </Grid>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            justifyContent="centre"
            alignItems="center"
          >
            {renderProduct()}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
