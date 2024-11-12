import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Creative Agency Page</title>
        <meta property="og:title" content="Creative Agency Page" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text10 Heading1">
                <span>We are a creative agency based</span>
                <br></br>
                <span>in Massachusetts</span>
              </h1>
              <span className="home-text13">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>
                  {' '}
                  tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </span>
              <button className="home-primary1 button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container2">
                <img
                  alt="image"
                  src="/rectangle%2095-1000w.png"
                  className="home-image1"
                />
              </div>
              <div className="home-container3">
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B1%5D-1000w.png"
                  className="home-image2"
                />
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B2%5D-1000w.png"
                  className="home-image3"
                />
              </div>
              <div className="home-container4">
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B3%5D-1000w.png"
                  className="home-image4"
                />
                <div className="home-container5">
                  <img
                    alt="image"
                    src="/rectangle%2095%20%5B4%5D-1000w.png"
                    className="home-image5"
                  />
                  <img
                    alt="image"
                    src="/rectangle%2095%20%5B5%5D-1000w.png"
                    className="home-image6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container2">
              <div className="home-text-container1">
                <span className="home-text17">our services</span>
                <h2 className="Heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container">
              <ServicesCard></ServicesCard>
              <ServicesCard
                text="Copy-writting"
                imageSrc="/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                imageSrc="/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text22">our work</span>
              <h2 className="home-text23 Heading2">
                <span>Explore our portfolio</span>
              </h2>
              <span className="home-text25">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button className="button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text29 tab-selector-btn">Advertising</span>
              <span className="home-text30 tab-selector-btn">Social Media</span>
              <span className="home-text31 tab-selector-btn">Branding</span>
              <span className="home-text32 tab-selector-btn">UI / UX</span>
              <span className="home-text33 tab-selector-btn">Packaging</span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                imageSrc="/unsplash_qj15unotnh0-400h.png"
                rootClassName="portofolio-cardroot-class-name"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/unsplash_wwqrpsnbpq4-400h.png"
                projectTitle="A brand-new advertising idea"
                rootClassName="portofolio-cardroot-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                projectTitle="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-cardroot-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                projectTitle="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-cardroot-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                projectTitle="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="portofolio-cardroot-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                projectTitle="Starbucks secret is a smile when you get your latte"
                rootClassName="portofolio-cardroot-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-text-container3">
              <span className="home-text35">about us</span>
              <h2 className="home-text36 Heading2">
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="home-text40">
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text41">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text42">
                    Long-term strategy development
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text43">
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text44">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text45">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item6">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text46">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/rectangle%20109-1000w.png"
                className="home-image7"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text47">Our process</span>
            <h2 className="home-text48 Heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step1">
              <span className="home-text52">01</span>
              <div className="home-container6">
                <span className="home-text53">Finding the best idea</span>
                <span className="home-text54">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text55">02</span>
              <div className="home-container7">
                <span className="home-text56">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text57">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-text58">03</span>
              <div className="home-container8">
                <span className="home-text59">Strong design execution</span>
                <span className="home-text60">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text61">from blog</span>
            <h2 className="home-text62 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text64">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary3 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-cardroot-class-name"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                imageSrc="/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-cardroot-class-name1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                imageSrc="/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width7 max-content-container">
            <span className="home-text68">what are you waiting?</span>
            <h2 className="home-text69 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="home-text71">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary4 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text75">Product</span>
                <span className="home-text76">About</span>
                <span className="home-text77">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text79">Navigate</span>
                <span className="home-text80">Copyrights</span>
                <span className="home-text81">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text83">Contact Us</span>
                <span className="home-text84">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text92">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width9 max-content-container">
          <img alt="image" src="/logo1-200h.png" className="home-image8" />
          <span className="home-text93">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text95">
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text97">teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
