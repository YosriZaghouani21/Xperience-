import React, {useState} from 'react';
import {comment} from '../JS/actions';
import {useDispatch} from 'react-redux';
const Comment = experience => {
  const dispatch = useDispatch();
  const addCom = (id, item) => {
    dispatch(comment(id, {text: item}));
  };
  const [data, setData] = useState([]);
  // const makeComment = (text, postId) => {
  //   dispatch(comment(postId, {text}));
  //   fetch('Comment', {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({postId, text}),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result);
  //       const newData = data.map(experience => {
  //         if (experience._id == result._id) {
  //           return result;
  //         } else {
  //           return experience;
  //         }
  //       });
  //       setData(newData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  return (
    <div>
      {/* {comments.map(record => {
        return <h6>{record.postedBy.name}</h6>;
      })} */}
      <form
        // onSubmit={e => {
        //   e.preventDefault();
        //   makeComment(e.target[0].value);
        // }}
        onSubmit={e => {
          e.preventDefault();
          addCom(experience._id, e.target[0].value);
          e.target[0].value = '';
        }}
      >
        <input type="text" placeholder="add a comment" />
      </form>
    </div>
  );
};

export default Comment;
