import React from 'react';

const Link = ({ url, title }) => {
    return (
      <a href={url} target="_blank" rel="noreferrer">
       {title}
      </a>
    );
}

 const Story = (props) => {
     console.log(props.story)
    const { objectID, points,author,num_comments, title, created_at, url } = props.story;
    console.log(objectID)
    
  return (
    <div className="story">
      <div className="story-title">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          {points}{' '}
          points by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${author}`} title={author} />
        </span>
        |<span>
          {created_at}
        </span>|
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${objectID}`}
            title={`${num_comments  > 0 ? num_comments : 0} comments`}
          />
        </span>
      </div>
    </div>
   );
 };



export default Story;