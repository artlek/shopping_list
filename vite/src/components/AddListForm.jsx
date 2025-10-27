import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AddShopplistToLocalStorage } from "../services/localStorage";
import { GetUserName } from '../services/localStorage';
import Box from '@mui/material/Box';
import NotificationBar from "./NotificationBar";

export function AddListForm({ handleClose, setIsLoading }) {
    const [disabledButton, setDisabledButton] = useState(false);
    const [error, setError] = useState(null);

    async function CreateShoplist(values) {
        setDisabledButton(true);
        setIsLoading(true);
        
        const body = {
            name: values.name,
            description: values.description,
            date: new Date(),
            user: GetUserName(),
        };

        try {
            const response = await fetch('api/api/shoppinglists'+'?', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/ld+json',
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(response.status + ': Network response was not ok. Please try later.');
            }

            const jsonResponse = await response.json();
            AddShopplistToLocalStorage(jsonResponse.uuid);
            setError(null);
            setDisabledButton(false);
            setIsLoading(false);
            handleClose();

        } catch (error) {
            setDisabledButton(false);
            setIsLoading(false);
            setError(error.message);
            console.error('POST request failed:', error);
        }
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
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            CreateShoplist(values);
            resetForm();
        },
    });

    return (
        <Box component="form" sx={{ width: { md: '75%' } }} onSubmit={formik.handleSubmit} className="add-list-form">
            <NotificationBar severity="error" display={error ? null : 'none'}>
               {error}
            </NotificationBar>
            <TextField
                size="small"
                fullWidth
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
                sx={{ my: 1 }}
                size="small"
                fullWidth
                id="description"
                name="description"
                placeholder="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ' '}
            />
            <Button fullWidth type="submit" variant="contained" disabled={disabledButton} sx={{ p: '8px', bgcolor: 'primary.main', fontWeight: 'bold' }}>
                Add
            </Button>
        </Box>
    );
}