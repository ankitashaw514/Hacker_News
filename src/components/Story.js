import React from 'react';
var parse = require('html-react-parser');

const Link = ({ url, title }) => {
    return (
      <a href={url} target="_blank" rel="noreferrer">
       {title}
      </a>
    );
}


export const convertDateToTimeAgo = (date) => {

  var delta = Math.abs(new Date().getTime()/1000 - date);

  var year = Math.floor(delta / 32140800);
  if (year) return `${year} years ago`;
  delta -= year * 32140800;

  var month = Math.floor(delta / 2678400);
  if (month) return `${month} months ago`;
  delta -= month * 2678400;

  var week = Math.floor(delta / 604800);
  if (week) return `${week} weeks ago`;
  delta -= week * 604800;

  var days = Math.floor(delta / 86400);
  if (days) return `${days} days ago`;
  delta -= days * 86400;
  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
 if (hours) return `${hours} hours ago`;
  delta -= hours * 3600;
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
 if (minutes) return `${minutes} minutes ago`;
  delta -= minutes * 60;
  // what's left is seconds
  var seconds = delta % 60;
 return `${seconds} seconds ago`;

}

 const Story = (props) => {
     
    const { objectID, points,author,num_comments, title, created_at_i, url ,story_title,story_url,comment_text,parent_id,_tags} = props.story;
    const text = parse(`${comment_text}`);

  return (
  <div>
    {_tags[0] === "story"?(
      <div className="story"> 
        <div className="story-title"><Link url={url} title={title} />
        </div>
          <div className="story-item">
            <div className="left">
                {`${points  > 0 ? points : 0}`}{' '}
                points {' '} | {' '}
                <Link
                  url={`https://news.ycombinator.com/item?id=${objectID}`}
                  title={`${num_comments  > 0 ? num_comments : 0} comments `}
                />
      
            </div>
            <div className="right">
              {convertDateToTimeAgo(created_at_i)} by {' '}
              <Link url={`https://news.ycombinator.com/user?id=${author}`} title={author} />
            </div>
            <div className="down">
            </div>

          </div>
      </div>
    ):
    (
      <div className="story"> 
        <div className="story-item">
          <div className="left">
              {`${points  > 0 ? points : 0}`}{' '}
              points {' '} | {' '}
              <Link url={`https://news.ycombinator.com/item?id=${parent_id}`} title={" parent"} />
            
          </div>
          <div className="right" >
            {convertDateToTimeAgo(created_at_i)} by {' '}
            <Link url={`https://news.ycombinator.com/user?id=${author}`} title={author} />
          </div>
      
      
          <div className="down">
            <br/>
            <Link url={story_url} title={story_title}/>
          </div>
          <br/>
          <div className="comment">
            {text}
          </div>
        </div>
      </div>
    )} 
  </div>
   );
 };



export default Story;