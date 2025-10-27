import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from "@mui/material";
import { SetUserName } from "../services/localStorage";
import { Logo } from "./Logo";

export function AddUserNameForm({ setLocalStorageUserName }) {

    const validationSchema = yup.object().shape({
        userName: yup.string()
            .matches(/^[^~`!.)_(@#\$%\^&\*\+=\{}\[\]\|\\:;<>\?"]*$/, { message: 'Incorrect characters'})
            .trim()
            .required('This field is required')
            .min(2, 'Min 2 marks required')
            .max(30, 'Max 50 marks required'),
    });

    const formik = useFormik({
        initialValues: {
            userName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values) {
                SetUserName(values.userName.trim());
                setLocalStorageUserName(values.userName);
            }
        },
    });

    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '10vh', px: '20px' }}
            bgcolor="background.default"
            className="add-user-name-form"
        >
            <Logo firstColor="text.secondary" />
            <form onSubmit={formik.handleSubmit} >
                <TextField
                    sx={{ '.MuiInputBase-input': {bgcolor: '#ffffff'}, pt: 5 }}
                    placeholder="Enter your name"
                    fullWidth
                    id="userName"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                    helperText={formik.touched.userName && formik.errors.userName ? formik.errors.userName : ' '}
                />
                <Button type="submit" fullWidth variant="button" sx={{ bgcolor: 'primary.main', p: 1.6, my: 1 }}>Let's start!</Button>
            </form>
        </Box>   
    );
}