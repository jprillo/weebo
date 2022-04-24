import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'
import { Link} from 'gatsby'
import background from '../images/hero-background.png'

import hero from '../images/hero-image.svg'





export default function Home() {
  
  return <div >
       <Helmet>
        <title>Gatsby Starter with Netlify CMS</title>
        <meta name="description" content="Create and Implement Profitable Business Opportunities in the US Wine Market for ​Wine Producers through Direct Sales Strategies to Key Retail Clients." />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout>
    
  <div className="flex-50 fullheight" >
  <div >
        <h1>A Gatsby Starter with Netlify CMS</h1>
        <p style={{marginBottom: "2em", color: "white"}}> WEEBO is a minimalist gatsby starter blog. It features Netlify's CMS and SASS for styling. Your interest pleases WEEBO. Check it out.  ​</p>
        <div clasName="flex-buttons">
       <Link  className= "primary-button" to ="/about">View Code</Link>
       <Link  className= "secondary-button" to ="/about">Demo Site</Link>
       </div>
      </div>
      <div  style={{padding: "17vh 2vw 10vh 5vw ", textAlign: "center" }}>
        <img  width="80%" src={hero} alt="about us"/>
      </div>
    
      </div>
     
    <div className="align-center instructions">
   <h2>Get Started</h2>
   <p>
     This is a copy of the the read me file with instructions on what to do. 
  </p>
  
    </div>

  


   

  </Layout>
    
  
  
    </div>
}
