/* eslint-disable react/jsx-key */
import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {

  const topicList = topics.map((topic, index) => {
    return (
    <TopicListItem
    key={index}
    slug={topic.slug}
    title={topic.title}
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
