import React from 'react';

function Home({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="home" className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Premium Hard Surface Flooring Solutions</h1>
              <p>Your trusted Southeast Hard Surface Territory Manager for South Florida and Southeast Florida, providing premium Shaw flooring products and support to flooring retailers and professionals.</p>
              <div className="cta-buttons">
                <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Order Samples</a>
                <a href="#" className="btn secondary" onClick={() => handleNavClick('contact')}>Get in Touch</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://img.shawinc.com/v1/VV810_05028/ROOM?quality=85&fmt=jpeg&w=656&h=564&keep=c&crop=true" alt="Beautiful Shaw Flooring Installation" />
            </div>
          </div>
        </div>
      </section>

      <section className="brands-section">
        <div className="container">
          <h2>Our Premium Brands</h2>
          <div className="brands-grid">
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.widen.net/content/cqhxb58qfg/web/CTFloors_Logo_Spot.web?position=c&color=ffffffff&quality=90&u=ow2cyi&w=172&ext=.&h=0&crop=true" alt="COREtec Logo" className="brand-logo" />
                COREtec Floors
              </h3>
              <p>100% waterproof, kidproof, petproof luxury vinyl planks and tiles with innovative WPC and SPC construction for extreme durability. Perfect for your customers' high-traffic areas.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.com/getattachment/52abdac4-d7bb-4d07-be35-310975ca4333/ShawFloorsLogo_Navy.webp?lang=en-US&ext=.webp" alt="Shaw Floors Logo" className="brand-logo" />
                Shaw Laminate
              </h3>
              <p>Beautiful, durable laminate flooring that delivers the look of hardwood and tile with superior scratch and stain resistance. Ideal for residential and light commercial applications.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.com/getattachment/52abdac4-d7bb-4d07-be35-310975ca4333/ShawFloorsLogo_Navy.webp?lang=en-US&ext=.webp" alt="Shaw Floors Logo" className="brand-logo" />
                Shaw Vinyl
              </h3>
              <p>Versatile luxury vinyl flooring options that combine style and performance for busy households and commercial spaces. Excellent margins and quick installation for your team.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.com/getattachment/52abdac4-d7bb-4d07-be35-310975ca4333/ShawFloorsLogo_Navy.webp?lang=en-US&ext=.webp" alt="Shaw Floors Logo" className="brand-logo" />
                Shaw Hardwood
              </h3>
              <p>Engineered hardwood flooring with authentic wood beauty, advanced finishes, and exceptional durability for lasting elegance. Premium product for your high-end customers.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.com/getattachment/52abdac4-d7bb-4d07-be35-310975ca4333/ShawFloorsLogo_Navy.webp?lang=en-US&ext=.webp" alt="Shaw Floors Logo" className="brand-logo" />
                Shaw Porcelain
              </h3>
              <p>Premium porcelain tile with exceptional durability, stain resistance, and timeless design. Perfect for high-traffic commercial and residential applications with superior margins.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
            <div className="brand-card">
              <h3>
                <img src="https://shawfloors.widen.net/content/rtvapyelgh/webp/Anderson%20Tuftex%20Logo_Olivine.webp?h=120&position=c&color=ffffffff&quality=80&u=ojeofe&ext=.&w=0&fmt=webp&crop=true" alt="Anderson Tuftex Logo" className="brand-logo" />
                Anderson Tuftex
              </h3>
              <p>Premium carpet and soft surface solutions with innovative designs and superior performance. Perfect for commercial applications and high-end residential projects with excellent margins.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('samples')}>Request Samples</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Southeast Hard Surface Territory Manager</p>
          <p>Serving South Florida & Southeast Florida</p>
          <p>Email: jpkicker@gmail.com | Phone: (561) 451-5880</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 