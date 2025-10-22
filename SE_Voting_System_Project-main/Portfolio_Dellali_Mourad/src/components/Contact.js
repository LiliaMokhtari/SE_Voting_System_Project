import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Section, Title, SectionHeading, ContactForm, FormMessage, Button } from '../styles/StyledComponents';
import styled from 'styled-components';

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: var(--accent);
  text-decoration: underline;
`;

const ContactIntro = styled.p`
  margin-bottom: 30px;
`;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you'd send this to your backend or a form service
    console.log('Form submitted:', formState);
    setFormStatus('Thanks — message received (demo).');
    
    // Reset the form
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };
  
  return (
    <Section id="contact" ref={ref}>
      <Container>
        <SectionHeading>
          <Title>Contact</Title>
        </SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ContactIntro>
            Interested in working together? Send a message or email me directly at <ContactLink href="mailto:mourad.dellali@email.com">mourad.dellali@email.com</ContactLink>
          </ContactIntro>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name">Name</FormLabel>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="email">Email</FormLabel>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="message">Message</FormLabel>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formState.message} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            
            <Button 
              as="button" 
              type="submit" 
              $primary 
              style={{
                background: 'linear-gradient(90deg, #7c5cff 0%, #5aa1ff 100%)',
                width: '100%'
              }}
            >
              Send message
            </Button>
            
            {formStatus && <FormMessage>{formStatus}</FormMessage>}
          </ContactForm>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;