import React from "react";
import "./Page3.css";
import Card from "../card/Card";
import ContactUs from "./ContactUs";
import Footer from "../footer/Footer";
import Marquee from "../Marquee/Marquee";
import Blogs from "./Blogs";

function Page3() {
  return (
    <div className="page3">
      <Card />
      {/* data-scroll data-scroll-speed="0.1" */}
      <h2>OUR TOP BLOGS</h2>

      <div className="blog-div">
        <Blogs
          link="https://quirkyfolks.blogspot.com/2024/07/everything-you-need-to-know-about.html"
          img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeItz12W8tGW5VD6_CiJ0G-9RHNyj1WuaWp50tSZw068FUJOtXeWlukr6JiaWUHQEf3_xd6QBISBVWzoR1GI5Z0ryzY9_6OpCNLcusPbv9u97SaLmMuBcOJgwEfySt3FysNhnWRI_sVe4zbKdxcXhal6UK0FCLdiesl2sx12gqTJgCOxoyjUca9L2BU_Bk/w945-h600-p-k-no-nu/WhatsApp%20Image%202024-07-29%20at%2016.42.09.jpeg"
          heading="Everything You Need to Know About Social Media Analytics"
          para="Social media management doesn’t stop at content creation and scheduling. Evaluating and sharing campaign impact is also essential for mesuring a campaign success. Reporting on performance and making strategic decisions based on social metrics can feel difficult – but it doesn’t have to be! Here’s everything you need to know about social media analytics — metrics you need to track to make analysis and reporting simple. What are Social Media Analytics?..."
        />
        <Blogs
          link="https://quirkyfolks.blogspot.com/2024/07/take-your-brand-to-next-level-with.html"
          img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqvyzPZyUAj6hz1XpUU7Nu39rrTX0cJCSHKABqScu6I8uuau7VGS9Qb9P2SIcZS_ht3YDwMEpaTyODhvmfoHibcS4N0rEShXQg4Hx5-58tPyAANmTwExn4q0eZl5j1NIRiwPc77ppfVrkjDDFRy7UD95OuHxpAu-7G7_qxAxN5MpddOR_qB9_xctVKXt0O/s600/Take%20your%20brand%20to%20the%20next%20level%20with.png"
          heading="Take your brand to the next level with Influencer Marketing"
          para="In todays environment businesses are constantly on the look out for new ways to elevate their brand and take it to the next level. One thing that plays a major role in that is capturing the attention of their target audience. A powerful method that has gained traction in doing so in the recent years is Influencer Marketing. Brands can enhance their visibility and credibility by partnering up with influencial individuals on the social media platforms to attract the audience..."
        />
        <Blogs
          link="https://quirkyfolks.blogspot.com/2024/07/how-to-know-if-you-have-good-engagement.html"
          img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig-U4q1aXovXIoEduy5zS-27UUJD7kGnMFW59wd0nC2HmaKtwC-r4WpdWT37xVZ29ELw63Ds3grUY3UIQ-vgl5SZxF6JPL6nmVDFEyAzfbnToWWuA0f0vnnt_t4DGIdbRjXceE2UT9zP2SEG43SC8JfQgqi8Z4ZylI1p4boE9PwnZ7FGdb91VxRhK0bbu3/s600/WhatsApp%20Image%202024-07-31%20at%2016.12.00.jpeg"
          heading="How to know if you have a good engagement rate on Instagram"
          para="In 2024, Instagram continues to garner higher engagement rates than other social media platforms.
          However, with organic engagement declining across all social media platforms and the meteoric rise of video-centric platforms like YouTube, staying on top of what constitutes a good engagement rate on Instagram can be daunting for marketers.
          To ensure you’re in the know about the latest metrics and best practices, let’s delve into how to accurately measure Instagram engagement and what the current benchmark is..."
        />
      </div>
      <div id="about-us" className="about">
        <h1>ABOUT US</h1>
        <p className="p1">
          We are a group of Quirky Folks who came together to form a marketing
          agency. We have created campaigns for some of the major brands and
          have relationships with influencers from all around India.
        </p>

        <p>
          We cater to our clients by providing them with personalised campaign
          strategies so that they can get the best results.
        </p>

        <h2 className="tagg">Sit back, relax and let Quirky handle it!</h2>
      </div>
      <Marquee />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Page3;
