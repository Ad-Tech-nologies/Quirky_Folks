import React from "react";
import "./Page2.css";
import Service from "./Service";

function Page2() {
  return (
    <div className="page2">
      <div className="services">
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
      </div>
    </div>
  );
}

export default Page2;
