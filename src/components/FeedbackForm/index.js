import React, { useState } from "react";
import styled from "@emotion/styled";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Button } from '@mui/material';
import ContributeIcon from "@site/static/img/git_contribute.svg";
import useWindowSize from "../../hooks/useWindowSize";
import axios from 'axios'

const FORM_ENDPOINT = "http://localhost:80/api/v1/feedbacks";

const FormHeaderTitle = styled("div")(() => ({
  fontSize: "18px;",
  fontWeight: "bold",
  marginBottom: "15px",
}));

const FormDivContainer = styled("div")(() => ({
  marginLeft: "10px",
  marginRight: "50px",
  width: "320px",
  minWidth: "320px",
  fontWeight: "bold",
  height: "430px",
  float: "left",
  marginBottom: "40px"
}));

const Label = styled("div")(() => ({
  marginTop: "10px",
  marginBottom: "5px",
  fontSize: "16px;"
}));

const LabelOptional = styled("span")(() => ({
  opacity: 0.5,
  fontSize: "15px;",
  float: "right"
}));

const FeedbackForm = (props) => {
  const size = useWindowSize();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    like: true
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleLike = (e) => {
    setFormData({
      ...formData,
      like: !formData.like
    });
  }
  const valid = () => {
    if (!formData.email) {
      alert('Required Email');
      return false;
    }
    if (!formData.description) {
      alert('Required Message');
      return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid()) return;

    axios.post(FORM_ENDPOINT, {
      email: formData.email,
      description: formData.description,
      like: Number(formData.like)
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response;
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  const Contribute = (
    <FormDivContainer>
      <FormHeaderTitle>Help us make these docs great!</FormHeaderTitle>
      <Label>
        All GitHub docs are open source. See something that's wrong or unclear?
        Submit a pull request.
      </Label>
      <Button variant="outlined" style={{ fontWeight: "bold", marginTop: "15px" }} onClick={() => window.open(props.editUrl)}>
        <ContributeIcon style={{ marginRight: "5px" }} />Make a contribution
      </Button>
      <Label>
        Or, <a style={{}} href="https://github.com/github/docs/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">
          learn how to contribute.
        </a>
      </Label>
      <FormHeaderTitle style={{ marginTop: "70px" }}>
        Still need help?
      </FormHeaderTitle>
      <Label>
        <a style={{}} href="https://github.com/github/docs/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">
          Ask the Gihub Commnuity
        </a>
      </Label>
    </FormDivContainer>
  );

  if (status) {
    return (
      <div style={{
        width: "100%",
        marginTop: "15px",
        display: size.width >= 768 ? "flex" : "block"
      }}>
        <FormDivContainer>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </FormDivContainer>
        {Contribute}
      </div>
    );
  }
  return (
    <>
      {/* <form
        action={FORM_ENDPOINT}
        method="POST"
        target="_blank"
        style={{
          width: "100%",
          marginTop: "15px",
          display: size.width >= 768 ? "flex" : "block"
        }}
      >
        <FormDivContainer>
          <FormHeaderTitle>Did this doc help you?</FormHeaderTitle>
          <Button variant={formData.like ? "contained" : "outlined"} color="primary" style={{ marginRight: "5px" }} onClick={handleLike}>
            <ThumbUpOffAltIcon />
          </Button>
          <Button variant={!formData.like ? "contained" : "outlined"} onClick={handleLike}>
            <ThumbDownOffAltIcon />
          </Button>
          <Label>Let us know what we do well.<LabelOptional>Optional</LabelOptional></Label>
          <textarea value={formData.description} onChange={handleChange} placeholder="" name="description" required cols={38} rows={5} style={{ borderRadius: "5px", padding: "10px" }} />
          <Label><span>If we can contact you with more questions, please enter your email address.</span>
            <LabelOptional>Optional</LabelOptional>
          </Label>
          <input value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" name="email" required style={{ width: "320px", borderRadius: "5px", padding: "10px" }} />
          <Label><span style={{ opacity: "0.5" }}>If you need a reply, please contact support instead.</span>
          </Label>
          <Button variant="outlined" style={{ float: "right", fontWeight: "bold" }} onClick={handleSubmit}>
            Send
          </Button>
          <Button color="primary" style={{ float: "right", marginRight: "25px", fontWeight: "bold" }}>
            Cancel
          </Button>
        </FormDivContainer>
        {Contribute}
      </form> */}
    </>

  );
};

export default FeedbackForm;