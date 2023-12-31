import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  Hero,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Stats,
  Testmonials,
} from "./Components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
          </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
           <Stats/>
           <Business/>
           <Billing/> 
           <CardDeal/>
           <Testmonials/>
           <Clients/>
           <CTA/>
           <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
