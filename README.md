# SIEM Dashboard Front-End

The SIEM Dashboard Front-End is a user-friendly interface designed to manage and monitor security events in a Security Information and Event Management (SIEM) system. Built with React, the dashboard provides real-time insights into agent statuses, security policies, file integrity monitoring, and system settings. It offers intuitive navigation between modules like a General Dashboard, detailed Agent Statistics, Settings, and a Support section for troubleshooting and documentation. The platform enhances security management with features like real-time alerts, customizable monitoring rules, and advanced configuration options, making it an essential tool for security administrators.

## Project Structure

The project is organized into the following directories:

```
siem-dashboard/
│
├── public/
│   └── index.html               # The HTML entry point for the React app
│
├── src/
│   ├── components/
│   │   ├── mainAssets/           # Stores image assets used across the app
│   │   │   ├── eye.jpg
│   │   │   ├── password.png
│   │   │   ├── person.png
│   │   │   └── techy.jpg
│   │   │
│   │   ├── mainScripts/          # Core React components for functionality
│   │   │   ├── AgentsContext.jsx # Manages state and context for agents data
│   │   │   ├── AgentStats.jsx    # Displays statistics about agents
│   │   │   ├── GeneralDashboard.jsx # General overview of system status
│   │   │   ├── Login.jsx         # Login page for authentication
│   │   │   ├── Settings.jsx      # Settings page for various configurations
│   │   │   ├── SIEMDashboard.jsx # The main dashboard page
│   │   │   ├── StatusPieChart.jsx # A pie chart visualization of agent statuses
│   │   │   └── Support.jsx       # Support page with documentation and contacts
│   │   │
│   │   ├── mainStyles/           # Contains CSS files for styling components
│   │   │   ├── AgentStats.css
│   │   │   ├── GeneralDashboard.css
│   │   │   ├── Login.css
│   │   │   ├── Settings.css
│   │   │   ├── SIEMDashboard.css
│   │   │   └── Support.css
│   │
│   ├── App.js                    # Main application component that integrates everything
│   ├── App.css                   # Global styles
│   ├── index.js                  # Entry point for rendering the React app
│   └── App.test.js               # Unit tests for App component
│
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

### Key Pages and Components

#### 1. **SIEMDashboard.jsx**
   - Main entry point for the dashboard interface.
   - Includes a sidebar for navigating between different sections (Dashboard, Agents, Settings, Support).
   - Uses React state to manage which section is displayed.

#### 2. **StatusPieChart.jsx**
   - A pie chart created using `recharts` to visualize agent statuses.
   - Displays total agents in the system and their categorized statuses.

#### 3. **Support.jsx**
   - Provides links to support documentation such as User Guide, API Docs, and Troubleshooting.
   - Includes a search bar for users to find specific support topics.
   - Displays contact details for further assistance.

#### 4. **Settings.jsx**
   - A page for users to manage system settings:
     - **General Settings**: Time zone, server address, and communication ports.
     - **File Monitoring**: Paths, rules, and real-time alerts.
     - **Security Policies**: IP ranges, two-factor authentication, and session timeout.
     - **Advanced Configurations**: Debug logging, cluster configurations.

#### 5. **AgentStats.jsx**
   - Displays real-time and historical statistics about agents connected to the SIEM platform.
   - Can be customized to filter data based on time range or other parameters.

#### 6. **Login.jsx**
   - A secure login page that prompts users for credentials.
   - Ensures proper authentication before allowing access to the SIEM dashboard.

#### 7. **AgentsContext.jsx**
   - A context provider for managing state related to agent data across multiple components.
   - Useful for sharing data about agents between the dashboard and agent-specific views.

### Stylesheets

Each major page and component has a corresponding CSS file in the `mainStyles/` directory. These stylesheets define the layout, appearance, and responsiveness of the components.

---

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/siem-dashboard.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd siem-dashboard
   ```

3. **Install dependencies:**
   This project uses `npm` to manage its dependencies. To install all necessary packages, run:
   ```bash
   npm install
   ```

4. **Run the development server:**
   Start the app by running the following command:
   ```bash
   npm start
   ```

   By default, the app will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Recharts**: A charting library used for visualizing data in the dashboard.
- **React Router**: For navigation between different pages in the application.
- **CSS**: For styling the components and layout.

