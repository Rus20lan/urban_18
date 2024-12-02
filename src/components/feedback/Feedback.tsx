import { FormEvent, useEffect, useState } from 'react';
import { IComment } from '../../interfaces/IComment';
import { MokkyDev } from '../../services/MokkyDev';

const initialFeedback: IComment = {
  name: '',
  comment: '',
};
const mokkyDev = new MokkyDev();
const Feedback = () => {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [message, setMessage] = useState('');
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const messageServer = await mokkyDev.sendComment(feedback);
    setMessage(messageServer);
    setFeedback(initialFeedback);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [message]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback({ ...feedback, [name]: value });
  };
  return (
    <>
      <div className="message_wrapper">{message && <h3>{message}</h3>}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            value={feedback.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-group">
          <textarea
            name="comment"
            required
            onChange={(e) => {
              handleChange(e);
            }}
            value={feedback.comment}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="comment">Commpent</label>
        </div>
        <div>
          <input className="btn_feedback" type="submit" value="Send" />
        </div>
      </form>
    </>
  );
};

export default Feedback;
