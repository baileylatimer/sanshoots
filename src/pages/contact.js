import React, { useEffect, useRef } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import { createWidget } from '@typeform/embed';

const typeformURL = 'https://form.typeform.com/to/LsunBzR3';

const TypeformEmbed = () => {
  const typeformRef = useRef(null);

  useEffect(() => {
    if (typeformRef.current) {
      createWidget(typeformURL, {
        container: typeformRef.current,
        width: '100%',
        height: '100vh',
      });
    }
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader title="Contact"/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '60vh',
        marginTop: '5vh',
        backgroundColor: '#f8f8f8',
        position: 'relative',
      }}>
        {/* Typeform container */}
        <div 
          ref={typeformRef} 
          style={{ 
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            border: 'none'
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default TypeformEmbed;
