import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import PageHeader from '../PageHeader';
import HeaderBackButton from '../HeaderBackButton';
import PageHeaderContent from '../PageHeaderContent';
import PageContent from '../PageContent';
import List from '@mui/material/List';
import { AddProductForm } from '../AddProductForm';
import LoadingLine from '../LoadingLine';
import { NoItems } from "../NoItems";
import { AddShopplistToLocalStorage } from '../../services/localStorage';
import Header from "../Header";
import Subheader from "../Subheader";
import AddProductMenu from '../AddProductMenu';
import { FilterProductsButtons } from '../FilterProductsButtons';
import { fetchProducts } from '../hooks/fetchProducts';
import { useFetchListItem } from '../hooks/useFetchListItem';
import NotificationBar from '../NotificationBar';
import { useAddProduct } from "../hooks/useAddProduct";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

export function ShoppinglistPage() {
    document.title = "Shopping List App";
    let params = useParams();
    const navigate = useNavigate();
    const { listItem, isLoadingListItem, listItemError } = useFetchListItem(params.uuid);
    const [products, setProducts] = useState('');
    const [productItems, setProductItems] = useState(null);
    const [error, setError] = useState('');
    const [fetchError, setFetchError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dependence, setDependence] = useState(0);

    AddShopplistToLocalStorage(params.uuid);
    document.title = listItem ? listItem.name + " - Shopping List App" : "Shopping List App";
    const onClickBackButton = () => {
        navigate('/lists');
    }

    const validationSchema = yup.object().shape({
    name: yup.string()
        .matches(/^[^~`!@#\$%\^&\*\+=\{}\[\]\|\\:;<>\?'"]*$/, { message: 'Incorrect characters. Allowed only: -_(),.'})
        .trim()
        .required('This field is required')
        .min(2, 'Min 2 marks required')
        .max(50, 'Max 50 marks required'),
    description: yup.string()
        .matches(/^[^~`!@#\$%\^&\*\+=\{}\[\]\|\\:;<>\?'"]*$/, { message: 'Incorrect characters. Allowed only: -_(),.'})
        .trim()
        .min(2, 'Min 2 marks required')
        .max(50, 'Max 50 marks required')
    });

    const formik = useFormik({
        validateOnBlur: false,
        validateOnChange: true,
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            useAddProduct(values, setError, listItem, setIsLoading, setDependence);
            resetForm();
            document.querySelector(`#${'name'}`).focus();
        },
    });

    useEffect(() => {
        fetchProducts(params.uuid, setProducts, setDependence, setIsLoading, setFetchError);
        setFetchError('');
    }, [dependence]);

    return(
        <>
            <PageHeader>
                <HeaderBackButton onClick={onClickBackButton} />
                <PageHeaderContent>
                    <Header header={listItem.name} />
                    <Subheader subheader={listItem.description} />
                </PageHeaderContent>
            </PageHeader>
            <LoadingLine isLoading={isLoadingListItem} />
            <PageContent marginX={{ xs: 0, sm: 6 }} marginY={{ xs: 0, sm: 1 }}>
                {listItemError ? <NotificationBar severity="error">Error. {listItemError.message}</NotificationBar> : null}
                {error ? <NotificationBar severity="error">Error. {error}</NotificationBar> : null}
                {fetchError ? <NotificationBar severity="error">Error. {fetchError}</NotificationBar> : null}
                <AddProductMenu title="Add product">
                    <AddProductForm>
                        <form onSubmit={formik.handleSubmit} style={{ marginBottom: '10px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'flex-start', gap: 5 }}>
                            <TextField 
                                sx={{
                                    flexGrow: 1, 
                                    '.MuiInputBase-input': { bgcolor: '#ffffff', fontSize: '0.8rem', height: 0 },
                                    '.MuiInputBase-formControl': { height: 30 }
                                }}
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ' '}
                            />
                            <TextField
                                sx={{
                                    flexGrow: 1, 
                                    '.MuiInputBase-input': { bgcolor: '#ffffff', fontSize: '0.8rem', height: 0 },
                                    '.MuiInputBase-formControl': { height: 30 }
                                }}
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ' '}
                            />
                            <Button variant="button" loading={isLoading} type="submit" sx={{ bgcolor: 'primary.main', height: 30, fontSize: '0.8rem' }}>
                                Add
                            </Button>
                        </form>
                    </AddProductForm>
                </AddProductMenu>  
                {products && products.length > 0 && !listItemError ? (
                    <>
                        <FilterProductsButtons products={products} setProductItems={setProductItems} />
                        <List sx={{ m: 1 }}>
                            {productItems}
                        </List>
                    </>
                ) : (
                    !isLoading ? <NoItems /> : null
                )}
            </PageContent>
        </>
    );
}