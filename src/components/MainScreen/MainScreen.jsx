import React, { useState } from "react";
import "./styles.css";

function MainScreen() {
  const alerts = ["Weather", "Stock Market", "News", "Sports", "Custom"];
  const [activeAlerts, setActiveAlerts] = useState({});
  const toggleAlert = (alert) => {
    setActiveAlerts((prevState) => ({
      ...prevState,
      [alert]: !prevState[alert],
    }));

    console.log(activeAlerts);
  };

  return (
    <div className="mainScreenContainer">
      <h1>Welcome, Nikhil!</h1>

      <div className="alertAndNotificationContainer">
        <div className="setAlertsContainer">
          <h2>Set Alerts</h2>
          <div className="availableAlerts">
            {alerts.map((alert, index) => (
              <div key={index} className="availableAlertItem">
                {alert}
                <button
                  className={`notification-button ${
                    activeAlerts[alert] ? "active" : ""
                  }`}
                  onClick={() => toggleAlert(alert)}
                >
                  {activeAlerts[alert] ? "ON" : "OFF"}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="notificationsContainer">
          <h2>Notifications</h2>
          <div className="notificationList">
            {Array.from({ length: 20 }).map((_, index) => (
              <p key={index}>This is notification</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
