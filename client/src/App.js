import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
 async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    const from = await axios.post('/api/form',{
      name,
      email,
      message
    })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: '600px', marginLeft: '50px', marginTop: '50px' }}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            type="text"
            name="email"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="name">Message</Label>
          <Input
            type="text"
            name="message"
            onChange={this.handleChange} />
        </FormGroup>

        <Button>Submit</Button>
      </Form>

    );
  }
}
export default App;
