import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { slug, title } = props;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
