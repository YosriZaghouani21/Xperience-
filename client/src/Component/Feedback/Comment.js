import React, {useState} from 'react';
import {comment, deleteComment} from '../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
var dateFormat = require('dateformat');
var now = new Date();
const Comment = () => {
  const experience = useSelector(state => state.experiencesReducers.experience);
  const comments = useSelector(state => state.experiencesReducers.experience.comments);
  const dispatch = useDispatch();
  const addCom = (id, item) => {
    dispatch(comment(id, {text: item}));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <form
            onSubmit={e => {
              e.preventDefault();
              addCom(experience._id, e.target[0].value);
              e.target[0].value = '';
              console.log(e.target[0].value);
            }}
          >
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ajouter votre commentaire"
                aria-label="Ajouter votre commentaire"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Publier
                </button>
              </div>
            </div>
            <div>
              {experience.comments
                .filter(
                  comment => experience.comments.indexOf(comment) !== experience.comments.length
                )
                .map(comment => (
                  <div
                    style={{
                      backgroundColor: '#F0F0F0',
                      margin: '10px 50px 5px 50px',
                      borderLeft: 'solid rgb(0, 249, 255)',
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <p
                          className="col-10 "
                          style={{
                            fontSize: 'small',
                            fontStyle: 'italic',
                          }}
                        >
                          {comment.postedBy} :
                        </p>

                        <p
                          className="col-2"
                          style={{
                            color: 'grey',
                            fontStyle: 'italic',
                            fontSize: 'small',
                          }}
                        >
                          {dateFormat(comment.date, 'mediumDate')}{' '}
                          {dateFormat(comment.date, 'shortTime')}
                          <i
                            class="fas fa-trash-alt"
                            style={{marginLeft: '170px'}}
                            onClick={() => {
                              dispatch(deleteComment(comments._id));
                            }}
                          ></i>
                        </p>
                      </div>
                    </div>

                    <div style={{marginLeft: '20px'}}>{comment.text}</div>
                  </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
