import ListItem from '@mui/material/ListItem';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProductItemContent from './ProductItemContent';
import ProductItemFirstLine from './ProductItemFirstLine';
import ProductItemSecondLine from './ProductItemSecondLine';
import ProductItemThirdLine from './ProductItemThirdLine';
import ProductItemMenu from './ProductItemMenu';
import { useEditProduct } from './hooks/useEditProduct';
import { useDeleteProduct } from './hooks/useDeleteProduct';

export default function Product({ product, setDependence }) {

    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [isBoughtLoading, setIsBoughtLoading] = useState(false);

    const date = new Date(product.date);
    dayjs.extend(relativeTime);
    
    const onClickDeleteProduct = () => {
        useDeleteProduct(product, setIsDeleteLoading, setDependence);
    }
    const onClickEditProduct = () => {
        useEditProduct(product, setIsBoughtLoading, setDependence);
    }

    const boughtStyle = {
        color: 'text.disabled',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '1',
        WebkitBoxOrient: 'vertical',
    };
    const toBuyStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '1',
        WebkitBoxOrient: 'vertical',
    };
    const style = product.bought ? boughtStyle : toBuyStyle;

    return(
        <>
            <ListItem disablePadding sx={{ my: 1, py: 1, bgcolor: 'background.default', borderRadius: 2 }} className="product">
                <ProductItemContent flexGrow="1" minHeight="68px" alignContent="center" px={2}>
                    <ProductItemFirstLine style={style}>{product.name}</ProductItemFirstLine>
                    <ProductItemSecondLine style={style}>{product.description}</ProductItemSecondLine>
                    <ProductItemThirdLine style={style}>{product.user ? product.user : null}&nbsp;|&nbsp;{dayjs(date).fromNow()}</ProductItemThirdLine>
                </ProductItemContent>
                <ProductItemMenu>
                    <IconButton onClick={()=>onClickDeleteProduct()} loading={isDeleteLoading} sx={{ mr: 0.5 }} edge="end">
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton color={product.bought ? 'success' : ''} onClick={()=>onClickEditProduct()} loading={isBoughtLoading} sx={{ mr: 1 }} edge="end">
                        {product.bought ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                    </IconButton>
                </ProductItemMenu>
            </ListItem>
        </>
    );
}