import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainCard from 'ui-component/cards/MainCard';
import CustomButton from 'ui-component/buttons/CustomButton';
import { activeItem } from 'store/slices/menu';
import { useDispatch } from 'store';
import myAxios from 'utils/myAxios';
import { openSnackbar } from 'store/slices/snackbar';
import visa from 'assets/images/visa.png';
import trash from 'assets/images/trash.png';
import checkbox from 'assets/images/checkbox.png';
import unCheckedCheckbox from 'assets/images/unCheckedCheckbox.png';

const ListCards = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        myAxios
            .get('/payment/get-all-cards')
            .then((res) => setCards(res.data.data))
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
    }, []);

    const deleteCard = (cardId) => {
        myAxios
            .delete('/payment/delete-card',{data: {cardId}})
            .then(() => {
                const newCards = cards.filter(card => card.id !== cardId);
                setCards(newCards)
                dispatch(
                    openSnackbar({
                        open: true,
                        message: "Card deleted successfully",
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

    return (
        <MainCard title="Credit/Debit card">
            <Grid container style={{ gap: 20 }}>
                {cards.map(card => (
                    <Grid item xs={12} className="paymentCard" display="flex" justifyContent="space-between" alignItems="center">
                        <Box sx={{ display: 'flex', gap: '50px' }}>
                            <Typography variant="h4" sx={{ color: '#02B100' }}>
                                <span style={{ textTransform: 'capitalize' }}>{card.funding}</span> card
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <Box
                                    onClick={() => console.log('gsdfgsg')}
                                    component="img"
                                    sx={{
                                        height: 20,
                                    }}
                                    src={visa}
                                />
                                <Typography>******* {card.last4}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '50px' }}>
                            <Box
                                onClick={() => deleteCard(card.id)}
                                component="img"
                                sx={{
                                    height: 30,
                                    width: 30
                                }}
                                src={trash}
                            />
                            <Box
                                component="img"
                                sx={{
                                    height: 30,
                                    width: 30
                                }}
                                src={card.isDefault ? checkbox : unCheckedCheckbox}
                            />
                        </Box>
                    </Grid>
                ))}
                <Grid item xs={12} display="flex" justifyContent="center">
                    <CustomButton
                        onClick={() => {
                            dispatch(activeItem(['Add Card']));
                            navigate('/payment-methods/sending/add-card');
                        }}
                    >
                        Add payment method
                    </CustomButton>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ListCards;
