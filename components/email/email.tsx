import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";


  import * as React from "react";
  

  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const RepoEmail = () => (
    <Html>
      <Head />
      <Preview>
        This is gonna be exciting!!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          
          <Text style={paragraph}>Hey!!</Text>
          <Text style={paragraph}>
            Thank you for subscribing to my newsletter and showing interest in the project.
          </Text>
          <Text style={paragraph}>
            Below is the link to the github repository where you can find the code.
          </Text>
          <Text style={paragraph}>
            Lets learn and grow together. 🚀
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://github.com/AdithyaKothamasu/Gamified-workspace.git">
              Go To The code.
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            Adithya
          </Text>
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
  
  export default RepoEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: 'black'
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#1F8EEF",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };