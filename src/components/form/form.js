import React, { Component } from 'react';
export default class Form extends Component {

  constructor () {
    super();
    this.state = {
      name: '',
      lastName: '',
      role: '',
      linkedInId: '',
      skypeId: '',
      roleDescription: '',
      socialLinks: '',
      aboutMe: '',
      address: '',
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
    evt.preventDefault();
  	var {
  	  name,
      lastName,
      role,
      linkedInId,
      skypeId,
      roleDescription,
      socialLinks,
      aboutMe,
      address,
      website,
      education,
      work,
      skillsDescription,
      skills,
      testimonials
  	} = this.state;

  	console.log(name);

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
        </label>
        <label>
          Role:
          <input type="text" name="role" onChange={this.handleChange} />
        </label><label>
          Linkedin Id:
          <input type="text" name="linkedInId" onChange={this.handleChange} />
        </label><label>
          Skype id:
          <input type="text" name="skypeId" onChange={this.handleChange} />
        </label><label>
          Role Description:
          <input type="text" name="roleDescription" onChange={this.handleChange} />
        </label><label>
          Social Links:
          <input type="text" name="socialLinks" onChange={this.handleChange} />
        </label><label>
          About Me:
          <input type="text" name="aboutMe" onChange={this.handleChange} />
        </label><label>
          Address:
          <input type="text" name="address" onChange={this.handleChange} />
        </label><label>
          Website:
          <input type="text" name="website" onChange={this.handleChange} />
        </label><label>
          Education:
          <input type="text" name="education" onChange={this.handleChange} />
        </label><label>
          Work:
          <input type="text" name="work" onChange={this.handleChange} />
        </label><label>
          Skills Description:
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