import { Button, Stack } from '@mui/material';
import React, { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function MoreInfo({description}) {
    const [showText, setShowText] = useState(false);

    const handleShowInfo = () => {
      setShowText(!showText);
    };
  
    return (
      <Stack>
        <Button onClick={handleShowInfo}>Más info <InfoOutlinedIcon size="small"/></Button>
        {showText && (
          <div>
            <p>{description}</p>
          </div>
        )}
      </Stack>
    );
}

export default MoreInfo