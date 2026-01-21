import { mockDataForProduct } from "@/widgets/Shop/model/mocks"
import { Box, Grid, Typography } from "@mui/material"
import { FC, ReactElement } from "react";
import { styled } from "styled-components"


interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

const CardStyled = styled(Box)`
    width: 200px;
    background-color: #f7f9f7;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Title = styled(Typography)`
    width: 70%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ButtonStyled = styled.button`
    width: 80%;
    padding: 5px;
    border-radius: 8px;
    border: none;
`;

const ImgStyled = styled.img`
    max-width: 80%;
    height: 150px;
`;

const ProductCard: FC<CardProps> = ({id, title, price, description, category, image, rating}) => {
    return (
        <CardStyled>
            <ImgStyled src={image} alt={title} />
            <Title variant="body2">{title}</Title>
            <Typography variant="h6" color="green">${price}</Typography>
            <ButtonStyled>Add to cart</ButtonStyled>
        </CardStyled>
    )
}

export { ProductCard };
