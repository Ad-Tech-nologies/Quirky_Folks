import React from "react";
import "./Page2.css";
import Service from "./Service";
import BrandContent from "./BrandContent";
import Why from "./Why";
import jvnsthi from "../../assets/jeevansathi.png"
import ajio from "../../assets/ajio.png"
import flipkart from "../../assets/flipkart.png"
import lenskart from "../../assets/lenskart.png"
import may from "../../assets/maybelline.png"
import milagro from "../../assets/milagro.png"
import titan from "../../assets/titan.png"
import amazon from "../../assets/amazon.png"
import loreal from "../../assets/loreal.png"
import moira from "../../assets/moira.png"
import pigeon from "../../assets/pigeon.png"
import prishe from "../../assets/prishe.png"
import tb from "../../assets/tacobell.png"
import tre from "../../assets/tresemme.png"
import meesho from "../../assets/meesho.png"

function Page2() {
  return (
    <div className="page2">
      <div data-scroll data-scroll-speed="0.3" className="services">
        <h3>Services</h3>
        <h2>TRUST US WITH</h2>
        <div className="ser">
          <Service 
            heading="INFLUENCER MARKETING"
            content="Youtube and instagram are the leading platforms for influencer marketing with more than 2.1 billion users. People create highly engaging content for a large audience to consume and quirky is here with all our connections to make sure you get the best results from this huge market."
          />
          <Service
            heading="SOCIAL MEDIA MANAGEMENT"
            content="⁠Social media management is all about turning likes into love and followers into superfans. It's about crafting killer content, riding the latest trends, and keeping an eye on those juicy metrics.  "
          />
          <Service
            heading="TALENT MANAGEMENT"
            content="Talent management focuses on discovering and developing creators, offering growth opportunities, and strategically guiding their careers. This involves personalised coaching, effective branding"
          />
          <Service
            heading="SOCIAL MEDIA MARKETING"
            content="Social media marketing is about crafting magnetic campaigns that grabs attention and sparks engagement. We harness the power of trends, tailor campaigns to captivate target audiences, and use data-driven insights to refine strategies. "
          />
        </div>
      </div>

      <div className="brands-div">
        <h2>BRANDS THAT ARE ALREADY QUIRKY….</h2>
        <div className="brand-img">

            <div className="firstrow">
            <BrandContent img1={jvnsthi}
            img2={ajio}
            img3={lenskart}
            img4={may}
            img5={milagro} />
            <BrandContent img1={jvnsthi}
            img2={ajio}
            img3={lenskart}
            img4={may}
            img5={milagro} />
            {/* <BrandContent img1={jvnsthi}
            img2={ajio}
            img3={lenskart}
            img4={may}
            img5={milagro} /> */}
            </div>

            <div className="firstrow">
            <BrandContent img1={flipkart}
            img2={titan}
            img3={moira}
            img4={pigeon}
            img5={tb} />
            <BrandContent img1={flipkart}
            img2={titan}
            img3={moira}
            img4={pigeon}
            img5={tb} />
            {/* <BrandContent img1={flipkart}
            img2={titan}
            img3={moira}
            img4={pigeon}
            img5={tb} /> */}
            </div>

            <div className="firstrow">
            <BrandContent img1={amazon}
            img2={loreal}
            img3={prishe}
            img4={tre}
            img5={meesho} />
            <BrandContent img1={amazon}
            img2={loreal}
            img3={prishe}
            img4={tre}
            img5={meesho} />
            </div>
            
        </div>
      </div>

      <div className="reason">
        <h3>WHY CHOOSE <span className="quirky">QUIRKY FOLKS</span></h3>
        <div className="why" >
        <Why heading="Personalised Brand Campaigns"
        con="We focus on personalization and provide each of our clients with exclusive strategy according to their needs." />
        <Why heading="Creative & Gen z approach" 
        con="We are a team of gen - z professionals so your brand will definitely get a quirky touch. And you will be able to ride the latest trends."/>
        <Why heading="Influencer Connections all over India !"
        con="We have worked with influencers from all around India, and can help you with the set that suits you the best." />
        </div>
        
      </div>
    </div>
  );
}

export default Page2;
