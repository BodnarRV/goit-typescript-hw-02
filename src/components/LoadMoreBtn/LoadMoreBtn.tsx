import React from "react";
import "./LoadMoreBtn.css";

interface ILoadMoreBtn {
  label: string;
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreBtn> = ({ label, onLoadMore }) => {
  return (
    <div className="btn-container">
      <button className="loadMore-btn" type="button" onClick={onLoadMore}>
        {label}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
