import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title, onTopicClick } = props;
  const handleClick = () => {
    onTopicClick(id);
  }
  return (
    <div className="topic-list__item" onClick={handleClick}>
      {/* Insert React */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
