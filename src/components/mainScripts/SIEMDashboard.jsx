import React, { useState } from 'react'; 
import { Link, Outlet } from 'react-router-dom';
import '../mainStyles/SIEMDashboard.css';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong. Please try again later.</div>;
    }

    return this.props.children; 
  }
}

const SIEMDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    try {
      setIsMenuOpen(prevState => !prevState);
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  };

  return (
    <div className="SIEMDashboard-container">
      {/* Full width NIMBUS header */}
      <div className="nimbus-header-container">
        <button onClick={toggleMenu} className="menu-toggle">
          ☰
          <span className="toggle-text">module</span>
        </button>
        <header className="nimbus-header">Cyber Guard</header>
      </div>

      {/* Sidebar Menu Container */}
      <div className="sidepanel-container">
        {/* Sidebar Menu */}
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link to="GeneralDashboard" onClick={toggleMenu}>General</Link>
            <Link to="Agents" onClick={toggleMenu}>Agents</Link>
            <Link to="Settings" onClick={toggleMenu}>Settings</Link>
            <Link to="Support" onClick={toggleMenu}>Support</Link>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* ErrorBoundary component to catch errors in child components */}
        <ErrorBoundary>
          <Outlet /> {/* Render the nested routes here */}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default SIEMDashboard;
