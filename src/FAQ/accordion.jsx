import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from "@mui/material";
import "./accordion.scss"


// export default function AccordionUsage() 

const Accordionn = () => {
  return (
  

        <div className="Faq">
            <div className="faq-title">
                <h1>FAQ</h1>
                <img src="public/afzal.png" alt="" />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>


            <div className="accordion">
            <Accordion id="box" >
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1-content"
            id="panel1-header"
           
         
        >
          <h1 id="h1-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
      <p id="p-title">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion >


      <Accordion id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h1 id="h1-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
        <p id="p-title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        </AccordionDetails>

      </Accordion>


      <Accordion id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h1 id="h1-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
       <p id="p-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion >


      <Accordion id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
         <h1 id="h1-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
       <p id="p-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion>


      <Accordion  id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
         <h1  id="h1-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
       <p id="p-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion>


      <Accordion  id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <h1 id="h1-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
       <p id="p-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion>


      <Accordion  id="box">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <h1 id="h1-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </AccordionSummary>

        <AccordionDetails>
       <p id="p-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </AccordionDetails>

      </Accordion>


  
    <div>



    </div>
  
            </div>
        </div>
    
  )
}

export default Accordionn