**SIEM Nimbus Documentation**

**Project Overview**

**SIEM Nimbus** is a Security Information and Event Management (SIEM)
dashboard designed to monitor, analyze, and report on security events.
The project offers real-time insights into system health, security
metrics, logs, and reports. It also includes user management and a help
section.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Installation and Setup](#installation-and-setup)
3. [Running the Project](#running-the-project)
4. [Features](#features)
5. [API Endpoints and JSON Server](#api-endpoints-and-json-server)
6. [Components Overview](#components-overview)
7. [Technologies Used](#technologies-used)
8. [Contribution Guidelines](#contribution-guidelines)
9. [License](#license)

---

**1. Project Structure**


siem-nimbus/

├── node_modules/

├── public/

├── src/

│ ├── components/

│ │ ├── Header.jsx

│ │ ├── HelpPage.jsx

│ │ ├── Login.js

│ │ ├── LogsPage.jsx

│ │ ├── Profile.jsx

│ │ ├── ReportPage.jsx

│ │ ├── Sidebar.jsx

│ │ └── UserMgmt.jsx

│ ├── data/

│ │ └── logs.json

│ ├── styles/

│ ├── App.js

│ ├── App.css

│ ├── index.js

│ ├── chartConfig.js

│ ├── reportWebVitals.js

│ └── setupTests.js

├── package-lock.json

├── package.json

└── README.md

-   **components/**: Contains reusable React components like Sidebar,
    Header, HelpPage, etc.

-   **data/**: Contains mock data for logs (JSON format).

-   **styles/**: Holds the CSS files for component styling.

-   **App.js**: Main application file that organizes all the components.

-   **index.js**: Entry point of the application.

**2. Installation and Setup**

**Pre-requisites:**

-   **Node.js**: Ensure Node.js (version 14.x or higher) is installed.

-   **NPM**: Node.js package manager (comes with Node.js).

-   **React**: The project is built with React.

-   **JSON Server**: Used for serving mock API data.

**Installation Steps:**

1.  Clone the repository:

> git clone https://github.com/yourusername/siem-nimbus.git
>
> cd siem-nimbus

2.  Install dependencies:

> npm install

3.  Install json-server globally (if not installed):

> npm install -g json-server

**3. Running the Project**

**Start the React App**


npm start

-   This will run the application on
    [**[http://localhost:3000]{.underline}**](http://localhost:3000).

**Run JSON Server (for mock data)**

1.  Navigate to the src/data folder:

> cd src/data

2.  Start the JSON Server:


>
> json-server \--watch logs.json \--port 5000

-   The mock REST API will run on
    [**[http://localhost:5000]{.underline}**](http://localhost:5000).

**4. Features**

**General Dashboard:**

-   Displays an overview of system metrics such as logs, recent alerts,
    and system status.

-   Visual charts showing security trends and insights.

**Agent Dashboard:**

-   Contains metrics related to specific agents (system logs, alerts,
    performance).

**Help Page:**

-   FAQ and contact details for support.

**User Management:**

-   Handles creation, modification, and deletion of users.

**Reports:**

-   Shows detailed system reports and analysis.

**5. API Endpoints and JSON Server**

**Mock API with JSON Server**

-   **Endpoint**: http://localhost:5000/logs

-   Example logs.json structure:

> json
>
>
> \[
>
> {
>
> \"id\": 1,
>
> \"timestamp\": \"2024-08-10T12:34:56Z\",
>
> \"severity\": \"High\",
>
> \"message\": \"Malware detected.\"
>
> },
>
> {
>
> \"id\": 2,
>
> \"timestamp\": \"2024-08-10T12:35:56Z\",
>
> \"severity\": \"Medium\",
>
> \"message\": \"Suspicious network activity.\"
>
> }
>
> \]

-   **Methods**:

    -   GET /logs: Fetches all log data.

    -   GET /logs/:id: Fetches specific log data by ID.

**6. Components Overview**

**Header.jsx**

-   Displays the application title and quick access to alerts and
    navigation options.

**Sidebar.jsx**

-   Navigation menu with links to key sections like Dashboard, Logs,
    Reports, User Management, and Help.

**HelpPage.jsx**

-   FAQ-style component with a search bar for finding help content.

**Login.js**

-   User login form with validation.

**LogsPage.jsx**

-   Displays the security logs fetched from the mock JSON server API.

**Profile.jsx**

-   User profile page where personal details and settings are managed.

**ReportPage.jsx**

-   Displays detailed security and system reports with charts and key
    metrics.

**UserMgmt.jsx**

-   User management dashboard for adding, editing, and deleting users.

**7. Technologies Used**

-   **Frontend**: React, JavaScript (ES6+), HTML5, CSS3

-   **Styling**: Bootstrap, custom CSS

-   **Backend**: JSON Server for testing with mock data

-   **State Management**: React useState and useEffect

-   **Additional Libraries**:

    -   axios: For making HTTP requests.

    -   react-router-dom: For page routing.

**8. Contribution Guidelines**

**Fork and Clone**

1.  Fork the repository.

2.  Clone it locally:

> bash
>
> Copy code
>
> git clone https://github.com/yourusername/siem-nimbus.git

**Branching Strategy**

-   Create a new branch for each feature or bug fix.


>
> git checkout -b feature/new-feature

**Submitting a Pull Request**

1.  Push the branch:

>
> git push origin feature/new-feature

2.  Open a Pull Request and describe the changes you made.

**9. License**

This project is licensed under the MIT License - see the LICENSE file
for details.
