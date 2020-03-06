// @flow
import React from 'react';
import css from './Password.scss';

export class Password extends React.Component<State> {
  constructor() {
    super();
    this.state = { password: false }; //Initially password is not seen.
  }

  showPassword = () => {
      let password=document.getElementById("pw");
      let password_button = document.getElementById("button");
      if(this.state) {
      password_button.removeAttribute("class");
      password_button.setAttribute("class","fas fa-eye-slash");

      password.removeAttribute("type");
      password.setAttribute("type","text");

      this.setState(() => {
        return {password: false};
        });

     }

      else {
      password.removeAttribute("type");
      password.setAttribute('type','password');
      password_button.removeAttribute("class");

      password_button.setAttribute("class","fas fa-eye");

      this.setState(() => {
        return {password: true};
        });

     }
   };
}
