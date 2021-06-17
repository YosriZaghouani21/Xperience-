import React, {useState} from 'react';
import {comment, deleteComment, getExperienceDetails} from '../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'reactstrap';
var dateFormat = require('dateformat');
var now = new Date();
const Comment = () => {
  const [newComment, setNewComment] = useState('');
  const experience = useSelector(state => state.experiencesReducers.experience);
  const user = useSelector(state => state.userReducer.user);

  const dispatch = useDispatch();
  const addCom = e => {
    e.preventDefault();
    dispatch(comment(experience.experience._id, {text: newComment, postedBy: user._id}));
    setNewComment('');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ajouter votre commentaire"
                aria-label="Ajouter votre commentaire"
                aria-describedby="basic-addon2"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={addCom}>
                  Publier
                </button>
              </div>
            </div>
            <div>
              {experience &&
                experience.experience &&
                experience.experience.comments &&
                experience.experience.comments.map(comment => (
                  <div
                    style={{
                      backgroundColor: '#F0F0F0',
                      margin: '10px 50px 5px 50px',
                      borderLeft: 'solid rgb(0, 249, 255)',
                    }}
                  >
                    <div className="container">
                      <span class="avatar avatar-lg rounded-circle">
                        <img alt="..." src={comment.postedBy.photo} />
                      </span>
                      <div className="row">
                        <p
                          className="col-10 "
                          style={{
                            fontSize: 'small',
                            fontStyle: 'italic',
                          }}
                        >
                          {comment.postedBy.name} :
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
                          {user._id == comment.postedBy._id ? (
                            <Button
                              outline
                              color="info"
                              size="sm"
                              onClick={e => {
                                e.preventDefault();
                                dispatch(deleteComment(experience.experience._id, comment._id));
                              }}
                            >
                              DELETE
                            </Button>
                          ) : (
                            ''
                          )}{' '}
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
