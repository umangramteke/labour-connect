import React from 'react';

function Navbar({ activeTab, setActiveTab, apiOnline }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-door' },
    { id: 'workers', label: 'Find Workers', icon: 'bi-people' },
    { id: 'jobs', label: 'Find Jobs', icon: 'bi-briefcase' },
    { id: 'request-service', label: 'Request Service', icon: 'bi-tools' },
    { id: 'register-worker', label: 'Worker Registration', icon: 'bi-person-badge' },
    { id: 'records', label: 'Live Server Records', icon: 'bi-database-check' },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        {/* Brand Logo & Name */}
        <button 
          className="btn btn-link navbar-brand d-flex align-items-center gap-2 p-0 text-decoration-none"
          onClick={() => setActiveTab('home')}
        >
          <div className="brand-badge">
            <i className="bi bi-hammer fs-5"></i>
          </div>
          <div className="d-flex flex-column text-start">
            <span className="brand-text lh-1">Labour Connect Express JS</span>
            <small className="text-muted" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
              EMPLOYMENT & SERVICE PLATFORM
            </small>
          </div>

        </button>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links & API Status Indicator */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link nav-link-custom d-flex align-items-center gap-2 border-0 bg-transparent ${
                    activeTab === item.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Server-Side Validation Live Status Pill */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <div 
              className={`d-flex align-items-center gap-2 px-3 py-1 rounded-pill ${
                apiOnline ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'
              }`}
              style={{ fontSize: '0.8rem', fontWeight: 600 }}
              title="ExpressJS Backend Health Check"
            >
              <span 
                className={`d-inline-block rounded-circle ${apiOnline ? 'bg-success' : 'bg-danger'}`} 
                style={{ width: '8px', height: '8px' }}
              ></span>
              <span>{apiOnline ? 'Express Server Active' : 'Server Disconnected'}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
