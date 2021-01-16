import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Box, Label } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchProducts } from "./redux/actions/action";
import Spinner from "./components/Spinner/Spinner";
import { v4 as uuidv4 } from "uuid";
import Product from "./components/Product";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(() => {
    setLoading(true);
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  }, [dispatch, setLoading]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const products = useSelector((state) => state.vendorMachine.stockProducts);
  const productsInProcess = useSelector(
    (state) => state.vendorMachine.productsInProcess
  );
  const productsDispatched = useSelector(
    (state) => state.vendorMachine.productsDispatched
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="row"
        width="100vw"
        height="100vh"
        flexWrap="wrap"
      >
        <Box
          style={{
            backgroundColor: " #2f4353",
            backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
          }}
          display="flex"
          flexDirection="row"
          width="55vw"
          flexWrap="wrap"
          alignItems="center"
          maxHeight="100vh"
          overflowY="scroll"
        >
          
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            color="white"
            bg="#2f4353"
            width="100%"
            height="5%"
          >
            <Label>Vendor Products</Label>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" height="95%" width="100%">
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center"  flex={1} width="100%" height="100%">
            <Spinner  />
            </Box>
          ) : (
            products?.map((item) => {
              return <Product key={uuidv4()} product={item} />;
            })
          )}
          </Box>
        </Box>

        <Box
          display="flex"
          bg="gray"
          flexDirection="row"
          justifyContent="center"
          width="20vw"
          flexWrap="wrap"
          maxHeight="100vh"
          overflowY="scroll"
          style={{
            backgroundColor: " #2f4353",
            backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" >
            <Box
              display="flex"
              justifyContent="center"
              mb={0.8}
              bg="#2f4353"
              width="19vw"
              height="5%"
            >
              <Label display="flex" justifyContent="center" alignItems="center" color="white">
                {`In Process (${productsInProcess.length})`}
              </Label>
            </Box>

            {productsInProcess?.map((item, index) => {
              return (
                <Product key={uuidv4()} product={item} dispatch={dispatch} />
              );
            })}
          </Box>
        </Box>

        <Box
          display="flex"
          bg="darkGray"
          flexDirection="row"
          width="25vw"
          flexWrap="wrap"
          justifyContent="center"
          height="100vh"
          maxHeight="100vh"
          overflowY="scroll"
          style={{
            backgroundColor: " #2f4353",
            backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center"  >
            <Box
              display="flex"
              flexWrap="wrap"
              mb={0.8}
              bg="#2f4353"
              justifyContent="center"
              width="24vw"
              height="5%"
            >
              <Label color="white">{`Dispatched (${productsDispatched.length})`}</Label>
            </Box>
            {productsDispatched?.map((item, index) => {
              return (
                <Product key={uuidv4()} product={item} dispatch={dispatch} />
              );
            })}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
