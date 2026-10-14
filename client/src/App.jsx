import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FindWorkersPage from './pages/FindWorkersPage';
import FindJobsPage from './pages/FindJobsPage';
import RequestServicePage from './pages/RequestServicePage';
import RegisterWorkerPage from './pages/RegisterWorkerPage';
import RecordsPage from './pages/RecordsPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [apiOnline, setApiOnline] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [preselectedWorker, setPreselectedWorker] = useState(null);

  // Check API health status and load initial workers/jobs
  const checkHealthAndLoadData = async () => {
    try {
      const healthRes = await fetch('/api/workers');
      if (healthRes.ok) {
        setApiOnline(true);
        const workersData = await healthRes.json();
        setWorkers(workersData.data || []);
      } else {
        setApiOnline(false);
      }

      const jobsRes = await fetch('/api/jobs');
      if (jobsRes.ok) {
        const jobsData = await jobsRes.json();
        setJobs(jobsData.data || []);
      }
    } catch (err) {
      console.warn("Backend not reachable yet:", err.message);
      setApiOnline(false);
    }
  };

  useEffect(() => {
    checkHealthAndLoadData();
    // Poll API status every 15 seconds
    const interval = setInterval(checkHealthAndLoadData, 15000);
    return () => clearInterval(interval);
  }, []);

  // Handler to refresh workers list after new worker registration
  const handleWorkerRegistered = () => {
    checkHealthAndLoadData();
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        apiOnline={apiOnline}
      />

      {/* Main Page Content */}
      <main className="flex-grow-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            workers={workers}
            jobs={jobs}
            onSelectJob={(job) => {
              setSelectedJob(job);
              setActiveTab('jobs');
            }}
            onHireWorker={(worker) => {
              setPreselectedWorker(worker);
              setActiveTab('request-service');
            }}
          />
        )}

        {activeTab === 'workers' && (
          <FindWorkersPage
            workers={workers}
            setActiveTab={setActiveTab}
            onHireWorker={(worker) => {
              setPreselectedWorker(worker);
              setActiveTab('request-service');
            }}
          />
        )}

        {activeTab === 'jobs' && (
          <FindJobsPage
            jobs={jobs}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            onApplicationSuccess={checkHealthAndLoadData}
          />
        )}

        {activeTab === 'request-service' && (
          <RequestServicePage
            preselectedWorker={preselectedWorker}
            onServiceSuccess={checkHealthAndLoadData}
          />
        )}

        {activeTab === 'register-worker' && (
          <RegisterWorkerPage
            onWorkerRegistered={handleWorkerRegistered}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'records' && (
          <RecordsPage />
        )}
      </main>

      {/* Footer */}
      <footer className="footer mt-auto">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="brand-badge" style={{ width: '32px', height: '32px' }}>
                  <i className="bi bi-hammer fs-6"></i>
                </div>
                <h5 className="text-white mb-0 fw-bold">Labour Connect Express JS</h5>
              </div>
              <p className="text-muted small pe-md-4">
                Web Technology Practical Project demonstrating ExpressJS Server-Side Validation, HTTP status codes, REST endpoints, and decoupled React UI deployed on Netlify.
              </p>

            </div>

            <div className="col-6 col-md-3">
              <h6 className="text-white fw-bold mb-3 small text-uppercase">Modules</h6>
              <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
                <li>
                  <button className="btn btn-link p-0 text-muted text-decoration-none" onClick={() => setActiveTab('workers')}>
                    Find Workers
                  </button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-muted text-decoration-none" onClick={() => setActiveTab('jobs')}>
                    Find Jobs
                  </button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-muted text-decoration-none" onClick={() => setActiveTab('request-service')}>
                    Request a Service
                  </button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-muted text-decoration-none" onClick={() => setActiveTab('register-worker')}>
                    Worker Registration
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4">
              <h6 className="text-white fw-bold mb-3 small text-uppercase">Server Validation Endpoints</h6>
              <div className="d-flex flex-column gap-1 small text-muted font-monospace">
                <div><code>POST /api/workers</code> (HTTP 201 / 400)</div>
                <div><code>POST /api/applications</code> (HTTP 201 / 400)</div>
                <div><code>POST /api/service-requests</code> (HTTP 201 / 400)</div>
                <div><code>GET /api/service-requests</code> (HTTP 200)</div>
                <div><code>GET /api/applications</code> (HTTP 200)</div>
              </div>
            </div>
          </div>

          <div className="border-top border-secondary border-opacity-25 mt-4 pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center text-muted small">
            <div>
              &copy; {new Date().getFullYear()} Labour Connect Express JS — Web Technology Assignment 5.

            </div>
            <div className="mt-2 mt-sm-0">
              <button 
                className="btn btn-sm btn-outline-secondary py-0 px-2"
                onClick={() => setActiveTab('records')}
              >
                <i className="bi bi-terminal me-1"></i>
                Examiner Test Bench
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
