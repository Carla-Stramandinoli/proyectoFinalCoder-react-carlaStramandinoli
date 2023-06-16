import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import FoodComponents from '../../pages/foodComponents/foodComponents';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsComponents() {
    const [selection, setValue] = React.useState("food");

    const handleChange = (_, value) => {
        setValue(value);
    }
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Box>
                <Tabs value={selection} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Alimentos" value="food" {...a11yProps(0)} />
                    <Tab label="Snacks" value="snack" {...a11yProps(1)} />
                    <Tab label="Contacto" value="contact" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box m={2}>  
                {selection === 'food' ? <FoodComponents /> : null}
                {selection === 'snack' ? <Box>Snacks</Box> : null}
                {selection === 'contact' ? <Box>Contacto</Box> : null}
            </Box>
        </Box>
    )
}

export default TabsComponents;

