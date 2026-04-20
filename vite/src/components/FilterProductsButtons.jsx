import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import DeleteBoughtProductsButton from './DeleteBoughtProductsButton';

export function FilterProductsButtons({ products, setProductItems, listUuid, setDependence }){
    const [productFilterCondition, setProductFilterCondition] = useState('all');
    const handleProductFilterCondition = (newValue) => {
        setProductFilterCondition(newValue);
    };

    const productFilterConditions = [
        'all',
        'to buy',
        'bought',
    ];

    useEffect(()=> {
        switch(productFilterCondition) {
            case 'all': setProductItems(products);
            break;
            case 'to buy': setProductItems(products.filter((item) => !item.props.product.bought));
            break;
            case 'bought': setProductItems(products.filter((item) => item.props.product.bought));
            break;
        }
    }, [productFilterCondition, products]);

    const filterButtons = productFilterConditions.map((condition) => 
        <Chip 
            sx={{
                borderWidth: 0,
                borderRadius: '0px',
                borderBottomWidth: '1px',
                flexGrow: {xs: 1, sm: 0},
                px: { sm: 2 },
                '&.MuiChip-clickable:hover': { backgroundColor: 'transparent' },
                '&.MuiChip-clickable:active': { backgroundColor: 'transparent' }
            }}
            variant="outlined"
            size="small"
            color={productFilterCondition === condition ? 'info' : ''} 
            key={productFilterConditions.keys().find((key) => productFilterConditions[key] === condition)} 
            value={condition} 
            label={condition.toUpperCase()}
            onClick={()=>handleProductFilterCondition(condition)}
        />
    );

    const boughtProductsCount = products.filter((item) => item.props.product.bought).length;

    return(
        <>
            <Stack
                px={1}
                direction="row"
                spacing={1}
                className="filter-products-buttons"
            >
                {filterButtons}
            </Stack>
            <Stack 
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{
                    m: 1
                }}>
                    {listUuid && boughtProductsCount > 0 && productFilterCondition === 'bought' && (
                        <DeleteBoughtProductsButton listUuid={listUuid} setDependence={setDependence} />
                )}
            </Stack>
        </>
    )
}