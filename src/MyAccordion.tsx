import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const MyAccordion: React.FC = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the content of the accordion. You can put any content you want here.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

