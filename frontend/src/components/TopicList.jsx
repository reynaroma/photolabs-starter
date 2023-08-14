/* eslint-disable react/jsx-key */
import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {

  const topicList = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
        id={topic.id}
        onTopicClick={onTopicClick}
      />)
  })

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicList}
    </div>
  );
};

export default TopicList;
