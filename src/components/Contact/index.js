import React from 'react';
import {Form, FormInput,  Drop, DropTitle, Span, InputText, InputEmail, InputSub, TextArea, InputSubmit } from "./style.js"
import Footer from '../Footer/index.js';

const Contact = () => {
    return (
       <React.Fragment> 
            <Drop>
                <div className="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <Form>
                        <FormInput>
                            <InputText type="text" placeholder="Your Name"/>
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <InputSub type="text" class="sub" placeholder="Your Subject"/>
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </Drop>
            <Footer />
        </React.Fragment>
        
    );
  }


export default Contact;
