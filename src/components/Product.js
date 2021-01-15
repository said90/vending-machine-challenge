import { useDispatch } from "react-redux";
import { productStatusHandler } from "../redux/actions/action";
import { Card, Box, Button, Label, Image } from "./";
import Timer from "./Timer";

const Product = ({ product, ...props }) => {
   const dispatch = useDispatch();
  return (
    <Card
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb={20}
      maxHeight={338}
    >
      <Box width="100%" height="150px">
        <Image
          style={{ objectFit: "cover" }}
          height="100%"
          width="100%"
          alt="Product"
          src={product.urlImage}
        />
      </Box>
      <Label variant="TextTitle">{product.name}</Label>
      <Label variant="TextBody">${product.price}</Label>
      <Label variant="TextBody" mb={10}>
        {product?.status === "inProcess" ? <Timer initTime={product.createdAt} cookingTime={product.cookingTime} />: product?.status==="dispatched"? null: `Cooking Time: ${product.cookingTime / 1000} Sec`}
      </Label>

      {!product?.status && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(productStatusHandler(product));
          }}
        >
          Buy
        </Button>

      )}
    </Card>
  );
};

export default Product;
