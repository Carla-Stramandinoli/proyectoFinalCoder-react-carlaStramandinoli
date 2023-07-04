import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useNavigate } from 'react-router-dom';


function ProdContainer({ current, products }) {
    const navigate = useNavigate();

    const handleChange = (_, newValue) => {
        navigate('/items/' + newValue)
    }
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Box>
                <Tabs value={current} onChange={handleChange} aria-label="basic tabs example">
                    {products.map((prod, index) => {
                        return <Tab key={index} label={prod.title} value={prod.id} />
                    })

                    }
                </Tabs>
            </Box>
        </Box>
    )
}

export default ProdContainer;

