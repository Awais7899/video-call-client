import { Grid, FormHelperText, TextField } from '@mui/material';
import React from 'react';
import CustomButton from 'ui-component/buttons/CustomButton';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import { activeItem } from 'store/slices/menu';
import { useNavigate } from 'react-router-dom';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import myAxios from 'utils/myAxios';

export default function AddCard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = yup.object({
        cardNumber: yup
            .string()
            .min(16, 'Card number must be 16 digits')
            .max(16, 'Card number must be 16 digits')
            .required('Card number is required'),
        expDate: yup
            .string()
            .matches('(0[1-9]|10|11|12)/[0-9]{4}$', 'Provide valid date in this format MM/YYYY')
            .required('Expiry date is required'),
        cvc: yup.string().min(3, 'CVC must be 3 digits').max(3, 'CVC must be 3 digits').required('CVC is required'),
        nameOnCard: yup.string().required('Name on card is required')
    });

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expDate: '',
            cvc: '',
            nameOnCard: ''
        },
        validationSchema,
        onSubmit: (values) => {
            myAxios
                .post('/payment/add-card', { ...values })
                .then((res) => {
                    dispatch(activeItem(['List Cards']));
                    navigate('/payment-methods/sending/list-cards');
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: 'Card added successfully',
                            variant: 'alert',
                            alert: {
                                color: 'success'
                            },
                            close: false
                        })
                    );
                })
                .catch((error) => {
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: error.message,
                            variant: 'alert',
                            alert: {
                                color: 'error'
                            },
                            close: false
                        })
                    );
                });
        }
    });

    return (
        <MainCard title="Credit/Debit card">
            <form onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="number"
                            name="cardNumber"
                            label="Card number"
                            onChange={formik.handleChange}
                            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                        />
                        <FormHelperText>Please enter 16 digits card number</FormHelperText>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            fullWidth
                            type="text"
                            name="expDate"
                            label="Expiry date"
                            onChange={formik.handleChange}
                            error={formik.touched.expDate && Boolean(formik.errors.expDate)}
                            helperText={formik.touched.expDate && formik.errors.expDate}
                        />
                        <FormHelperText>Please enter expiry date MM/YYYY</FormHelperText>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            fullWidth
                            type="number"
                            name="cvc"
                            label="CVC"
                            onChange={formik.handleChange}
                            error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                            helperText={formik.touched.cvc && formik.errors.cvc}
                        />
                        <FormHelperText>Please enter your CVC</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="nameOnCard"
                            label="Name on card"
                            onChange={formik.handleChange}
                            error={formik.touched.nameOnCard && Boolean(formik.errors.nameOnCard)}
                            helperText={formik.touched.nameOnCard && formik.errors.nameOnCard}
                        />
                        <FormHelperText>Please enter your full name</FormHelperText>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <CustomButton>Submit</CustomButton>
                    </Grid>
                </Grid>
            </form>
        </MainCard>
    );
}
