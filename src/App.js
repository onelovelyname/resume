import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData.js';
import Form from './components/form/form'
//import MyVerticallyCenteredModal from './components/modal/modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class App extends Component {
  constructor(...args) {
    super(...args);
    const DEFAULT_VARS = {
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
      portfolio: '',
      work: '',
      skillsDescription: '',
      skills: '',
      testimonials: '',
    };

    this.state = {...DEFAULT_VARS, ...resumeData};

    console.log('this.state', JSON.stringify(this.state));
  }

  handleSubmit(data) {
    console.log("calling handleSubmit from parent: ", data);
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="App">
        <Header
          name={this.state.name}
          role={this.state.role}
          roleDescription={this.state.roleDescription}
          socialLinks={this.state.socialLinks}
        />
        <About
          aboutMe={this.state.aboutMe}
          name={this.state.name}
          address={this.state.address}
          website={this.state.website}
        />
        <Resume
          education={this.state.education}
          work={this.state.work}
          skills={this.state.skills}
          skillsDescription={this.state.skillsDescription}
        />
        <Portfolio
          portfolio={this.state.portfolio}
        />
        <Testimonials
          testimonials={this.state.testimonials}
        />
        <ContactUs
          linkedInId={this.state.linkedInId}
        />
        <Footer
          socialLinks={this.state.socialLinks}
        />
        <Form
          data={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
