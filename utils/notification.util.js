const { Notification } = require("electron");
const path = require("path");

/**
 * This function is used to display a desktop notification.
 *
 * @param {string} message - The message to be displayed in the notification body.
 * @returns {void}
 */
exports.notify = (message) => {
  // Check if the Notification API is available
  if (Notification.isSupported()) {
    try {
      const options = {
        title: "Nlvl Tracker", // The title of the notification
        subtitle: "Update 🌱", // The subtitle of the notification
        body: message, // The main content of the notification
        silent: false, // Whether the notification should be silent or not
        icon: path.join(__dirname, "../icon/appIcon.png"), // The path to the notification icon
        hasReply: true, // Whether the notification should have a reply input field
        timeoutType: "never", // The timeout behavior of the notification
        replyPlaceholder: "Reply Here", // The placeholder text for the reply input field
        urgency: "critical", // The urgency level of the notification
        closeButtonText: "Close Button", // The text for the close button
        actions: [
          {
            type: "button", // The type of the action button
            text: "Show Button", // The text for the action button
          },
        ],
      };

      new Notification(options).show(); // Display the notification
    } catch (error) {
      console.error("Failed to show notification:", error.message); // Log the error message if the notification fails to display
    }
  } else {
    console.error("Notifications are not supported on this platform."); // Log an error message if notifications are not supported on the platform
  }
};
