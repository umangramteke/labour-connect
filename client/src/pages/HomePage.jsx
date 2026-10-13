import React from 'react';
import WorkerCard from '../components/WorkerCard';
import JobCard from '../components/JobCard';

function HomePage({ setActiveTab, workers, jobs, onSelectJob, onHireWorker }) {
  // Show top 3 workers and top 3 jobs as preview
  const featuredWorkers = workers.slice(0, 3);
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="hero-pill">
                <i className="bi bi-shield-check"></i>
                <span>Strict ExpressJS Server-Side Validation Enabled</span>
              </div>
              <h1 className="hero-title">
                Connecting Skills with Opportunities
              </h1>
              <p className="hero-subtitle">
                Labour Connect bridges the gap between daily-wage workers, skilled technicians, and people who need them. Hire certified local experts or find meaningful employment opportunities with transparent terms.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn btn-primary-custom btn-lg d-flex align-items-center gap-2"
                  onClick={() => setActiveTab('request-service')}
                >
                  <i className="bi bi-tools"></i>
                  <span>Hire Skilled Service</span>
                </button>
                <button
                  className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                  onClick={() => setActiveTab('jobs')}
                >
                  <i className="bi bi-briefcase"></i>
                  <span>Explore Jobs</span>
                </button>
                <button
                  className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                  onClick={() => setActiveTab('register-worker')}
                >
                  <i className="bi bi-person-plus"></i>
                  <span>Register as Worker</span>
                </button>
              </div>
            </div>

            {/* Platform Highlights Sidebar */}
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 p-4 rounded-4 border border-white border-opacity-20 shadow-lg text-white">
                <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-lightning-charge-fill text-warning"></i>
                  <span>Assignment Core Features</span>
                </h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3 small">
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-check2-circle text-success fs-6 mt-1"></i>
                    <div>
                      <strong>Employment Connect:</strong> Verified jobs for plumbers, electricians, painters, carpenters and more.
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-check2-circle text-success fs-6 mt-1"></i>
                    <div>
                      <strong>On-Demand Service Connect:</strong> Doorstep repair & maintenance requests directly sent to Express backend.
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-check2-circle text-success fs-6 mt-1"></i>
                    <div>
                      <strong>Server-Side Validation:</strong> Comprehensive validation rules directly executed on Node.js/Express.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Module Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '0.1em' }}>
              TWO POWERFUL MODULES
            </span>
            <h2 className="display-6 fw-bold mt-1">How Labour Connect Works</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Whether you are an employer seeking daily workers or a homeowner needing immediate repairs, Labour Connect has you covered.
            </p>
          </div>

          <div className="row g-4">
            {/* Module 1: Employment Connect */}
            <div className="col-md-6">
              <div className="module-card p-4 p-lg-5">
                <div className="icon-box icon-box-primary mb-4">
                  <i className="bi bi-briefcase-fill"></i>
                </div>
                <h3 className="h4 fw-bold mb-2">1. Employment Connect</h3>
                <p className="text-secondary mb-4">
                  Helps shops, contractors, small businesses, and homeowners recruit skilled labor. Workers can browse verified job openings, see offered compensation, and apply with instant server validation.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <button
                    className="btn btn-primary-custom d-flex align-items-center gap-2"
                    onClick={() => setActiveTab('jobs')}
                  >
                    <span>Browse All Jobs</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                  <button
                    className="btn btn-outline-custom d-flex align-items-center gap-2"
                    onClick={() => setActiveTab('register-worker')}
                  >
                    <span>Register Worker Profile</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Module 2: On-Demand Service Connect */}
            <div className="col-md-6">
              <div className="module-card p-4 p-lg-5">
                <div className="icon-box icon-box-success mb-4">
                  <i className="bi bi-tools"></i>
                </div>
                <h3 className="h4 fw-bold mb-2">2. On-Demand Service Connect</h3>
                <p className="text-secondary mb-4">
                  Helps households and businesses hire emergency plumbers, electricians, mechanics, painters, carpenters, and appliance repair specialists with guaranteed server-side scheduling checks.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <button
                    className="btn btn-success d-flex align-items-center gap-2 text-white fw-semibold px-4 py-2 rounded-3 shadow-sm"
                    onClick={() => setActiveTab('request-service')}
                  >
                    <span>Request a Service</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                  <button
                    className="btn btn-outline-custom d-flex align-items-center gap-2"
                    onClick={() => setActiveTab('workers')}
                  >
                    <span>View Service Providers</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Providers Preview */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
            <div>
              <span className="badge bg-primary-subtle text-primary mb-1">LOCAL EXPERTS</span>
              <h3 className="fw-bold mb-0">Featured Skilled Workers</h3>
            </div>
            <button
              className="btn btn-outline-primary mt-2 mt-md-0 fw-semibold d-flex align-items-center gap-2"
              onClick={() => setActiveTab('workers')}
            >
              <span>View All Workers ({workers.length})</span>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className="row">
            {featuredWorkers.map((worker) => (
              <WorkerCard
                key={worker.id}
                worker={worker}
                onHireClick={(w) => {
                  onHireWorker(w);
                  setActiveTab('request-service');
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Preview */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
            <div>
              <span className="badge bg-warning-subtle text-warning-emphasis mb-1">CAREER OPPORTUNITIES</span>
              <h3 className="fw-bold mb-0">Latest Available Jobs</h3>
            </div>
            <button
              className="btn btn-outline-primary mt-2 mt-md-0 fw-semibold d-flex align-items-center gap-2"
              onClick={() => setActiveTab('jobs')}
            >
              <span>View All Jobs ({jobs.length})</span>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className="row">
            {featuredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApplyClick={(j) => {
                  onSelectJob(j);
                  setActiveTab('jobs');
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
