import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowRight } from '@material-ui/icons';

export const MyAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={toggleAccordion}>
      <AccordionSummary
        expandIcon={expanded ? <KeyboardArrowUp /> : <KeyboardArrowRight />}
      >
        <Typography variant="h6">アコーディオン タイトル</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>アコーディオンサンプルです！！！！</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
