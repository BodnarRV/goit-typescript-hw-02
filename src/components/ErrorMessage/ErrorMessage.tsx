import React from "react";
import "./ErrorMessage.css";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="error-container">
      <p className="error-message">Something went wrong error - {error}</p>
    </div>
  );
};

export default ErrorMessage;
