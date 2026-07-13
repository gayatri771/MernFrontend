import React from 'react'

export default function About() {
  return (
    <section style={{ fontFamily: 'system-ui, sans-serif', margin: '40px auto', padding: '0 20px', color: '#333', lineHeight: '1.6', textAlign: 'center' }} className="about">

      {/* Header Section */}
      <div style={{ marginBottom: '40px' }} className="about-header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#795a8e' }}>About ShopSphere</h1>
        <p style={{ fontSize: '1.1rem', color: '#8294bf', margin: 0 }}>Your one-stop destination for trendy and affordable shopping.</p>
      </div>

      <div className="about-content">
            {/* Text Blocks */}
            <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#795a8e' }}>Who We Are</h2>
            <p style={{ margin: 0, color: '#8294bf' }}>
                ShopSphere is a modern e-commerce platform dedicated to bringing
                customers the best online shopping experience. From fashion and
                electronics to home essentials and beauty products, we offer
                everything you need in one place.
            </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#795a8e' }}>Our Story</h2>
            <p style={{ margin: 0, color: '#8294bf' }}>
                Founded in 2022, ShopSphere started with a simple goal —
                to make online shopping easy, reliable, and budget-friendly.
                Today, we proudly serve thousands of happy customers across India.
            </p>
            </div>

            {/* Centered Bullet List */}
            <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#795a8e' }}>Why Customers Love Us</h2>
            <ul style={{ padding: 0, margin: 0, color: '#8294bf', listStyleType: 'none' }}>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#d28fa1', marginRight: '5px' }}>*</span> High-quality products</li>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#d28fa1', marginRight: '5px' }}>*</span> Affordable pricing</li>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#d28fa1', marginRight: '5px' }}>*</span> Fast and secure delivery</li>
                <li style={{ marginBottom: '8px' }}><span style={{ color: '#d28fa1', marginRight: '5px' }}>*</span> Easy return policy</li>
                <li style={{ marginBottom: '0' }}><span style={{ color: '#d28fa1', marginRight: '5px' }}>*</span> 24/7 customer support</li>
            </ul>
            </div>

            {/* Centered Horizontal Stats */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', padding: '25px 0', marginBottom: '40px' }} className="stats">
            <div style={{ flex: 1 }} className="stat-box">
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#795a8e' }}>100K+</h3>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.95rem' }}>Happy Customers</p>
            </div>
            <div style={{ flex: 1 }} className="stat-box">
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#795a8e' }}>25K+</h3>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.95rem' }}>Products Available</p>
            </div>
            <div style={{ flex: 1 }} className="stat-box">
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#795a8e' }}>500+</h3>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.95rem' }}>Trusted Sellers</p>
            </div>
            </div>

            {/* Centered Team List Section */}
            <div style={{ marginBottom: '40px' }} className="team">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#795a8e' }}>Meet Our Team</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap' }}>
                <div className="member" style={{ minWidth: '150px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#795a8e' }}>Rohan Mehta</h4>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.9rem' }}>Founder & CEO</p>
                </div>
                <div className="member" style={{ minWidth: '150px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#795a8e' }}>Ananya Roy</h4>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.9rem' }}>Creative Director</p>
                </div>
                <div className="member" style={{ minWidth: '150px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#795a8e' }}>Vikram Singh</h4>
                <p style={{ margin: 0, color: '#8294bf', fontSize: '0.9rem' }}>Technical Lead</p>
                </div>
            </div>
            </div>

            {/* Centered Contact Section */}
            <div style={{ paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#795a8e' }}>Contact Us</h2>
            <p style={{ margin: '0 0 5px 0', color: '#8294bf' }}><strong style={{ color: '#7c7375' }}>Email:</strong> support@shopsphere.com</p>
            <p style={{ margin: '0 0 5px 0', color: '#8294bf' }}><strong style={{ color: '#7c7375' }}>Phone:</strong> +91 98765 43210</p>
            <p style={{ margin: 0, color: '#8294bf' }}><strong style={{ color: '#7c7375' }}>Address:</strong> Kolkata, West Bengal, India</p>
            </div>
      </div>

    </section>
  )
}