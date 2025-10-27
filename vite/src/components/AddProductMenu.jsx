import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

export default function AddProductMenu({ title, children }) {
    return (
        <Accordion component="span" disableGutters className="add-product-menu">
            <AccordionSummary sx={{ '&.MuiButtonBase-root': { p: 2 } }} expandIcon={<ExpandMoreIcon />} aria-controls="add-product-form" id="add-product-form">
                <Link color="primary.light" underline="hover">{title}</Link>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}