import React, {useState} from 'react';

const Comment = () => {
  const [data, setData] = useState([]);
  const makeComment = (text, postId) => {
    fetch('comment', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({postId, text}),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const newData = data.map(item => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* {comments.map(record => {
        return <h6>{record.postedBy.name}</h6>;
      })} */}
      <form
        onSubmit={e => {
          e.preventDefault();
          makeComment(e.target[0].value);
        }}
      >
        <input type="text" placeholder="add a comment" />
      </form>
    </div>
  );
};

export default Comment;
