import React from "react";

import "./Admin.css";

function Admin() {
  const sendNotification = (type) => {
    alert(`Sending ${type} notification to all subscribed users.`);
    // Add your notification sending logic here
  };

  return (
    <div className="admin-page">
      <h1>Admin Notification Panel</h1>
      <div className="buttons-container">
        <button
          className="notification-button"
          onClick={() => sendNotification("Weather")}
        >
          Weather Notification
        </button>
        <button
          className="notification-button"
          onClick={() => sendNotification("Stock Market")}
        >
          Stock Market Notification
        </button>
        <button
          className="notification-button"
          onClick={() => sendNotification("News")}
        >
          News Notification
        </button>
        <button
          className="notification-button"
          onClick={() => sendNotification("Event")}
        >
          Event Notification
        </button>
        <button
          className="notification-button"
          onClick={() => sendNotification("Alert")}
        >
          Alert Notification
        </button>
      </div>
    </div>
  );
}

export default Admin;
