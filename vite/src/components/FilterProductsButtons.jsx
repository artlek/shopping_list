import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export function FilterProductsButtons({ products, setProductItems }){
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

    const buttons = productFilterConditions.map((condition) => 
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

    return(
        <Stack px={1} direction="row" spacing={1} className="filter-products-buttons">
            {buttons}
        </Stack>
    );
}