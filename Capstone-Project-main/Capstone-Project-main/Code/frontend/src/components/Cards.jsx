import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { IconButton, Box, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { addToCart } from "../store/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ item, hasDiscount }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        price: hasDiscount
          ? (item.price * (100 - item.discount)) / 100
          : item.price,
      })
    );
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" color="textSecondary" component="p">
          {item.title}
        </Typography>
        <Box display="flex" alignItems={"baseline"}>
          <Typography variant="h5" color="textSecondary" component="p">
            ${" "}
            {hasDiscount
              ? (item.price * (100 - item.discount)) / 100
              : item.price}
          </Typography>
          {hasDiscount && (
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ textDecoration: "line-through", marginLeft: 10 }}
            >
              ${item.price}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to shopping cart"
          onClick={() => handleAddToCart(item)}
        >
          <ShoppingCartOutlined />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() =>
            navigate(
              `/Products/${item._id} ${hasDiscount ? "?discount=true" : ""}`
            )
          }
        >
          <SearchOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <FavoriteBorderOutlined />
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
