import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const Form = () => {
  const [title, setTitle] = useState(null);

  const handleChange = e => {
    setTitle({
      title: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addArticle(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Form);
