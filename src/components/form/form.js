import React, { Component } from 'react';
export default class Form extends Component {

  constructor () {
    super();
    this.state = {
      Name: '',
      LastName: '',
      role: '',
      linkedinld: '', 
      skypeid: '',
      roleDescription: '',
      socialLInks: '',
      aboutme: '',
      adress: '', 
      website: '',
      education: '',
      work: '', 
      skillsDescription: '',
      skills: '',
      testimonials: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
  	console.log(this.state.value);
  	alert(this.state.value);
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" onChange={this.handleChange} />
        </label>
        <label>
          LastName:
          <input type="text" name="LastName" onChange={this.handleChange} />
        </label>
        <label>
          role:
          <input type="text" name="role" onChange={this.handleChange} />
        </label><label>
          linkedinld:
          <input type="text" name="linkedinld" onChange={this.handleChange} />
        </label><label>
          skypeid:
          <input type="text" name="skypeid" onChange={this.handleChange} />
        </label><label>
          roleDescription:
          <input type="text" name="roleDescription" onChange={this.handleChange} />
        </label><label>
          socialLInks:
          <input type="text" name="socialLInks" onChange={this.handleChange} />
        </label><label>
          Aboutme:
          <input type="text" name="aboutme" onChange={this.handleChange} />
        </label><label>
          Adress:
          <input type="text" name="adress" onChange={this.handleChange} />
        </label><label>
          website:
          <input type="text" name="website" onChange={this.handleChange} />
        </label><label>
          education:
          <input type="text" name="education" onChange={this.handleChange} />
        </label><label>
          work:
          <input type="text" name="work" onChange={this.handleChange} />
        </label><label>
          skillsDescription:
          <input type="text" name="skillsDescription" onChange={this.handleChange} />
        </label>
        <label>
          skills:
          <input type="text" name="skills" onChange={this.handleChange} />
        </label>
        <label>
          testimonials:
          <input type="text" name="testimonials" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}