import React from 'react';

import {LoginForm} from './LoginForm';

import { SignInForm } from './SignInForm';

export const LogInSignIn = (props) => {
    return <React.Fragment>
        <LoginForm/>
        <SignInForm/>
    </React.Fragment>
}
