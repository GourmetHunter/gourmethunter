import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd';

let InputGroup = Input.Group;

function SignIn(username, pass, confirmpass) {
    if (pass !== confirmpass) {
        return "not OK!";
    }
}

export const LoginForm = (props) => {
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const [confirmpassword, updateConfirmPassword] = useState("");
    return <Row>
        <Col span={8}></Col>
        <Col span={8}>
            <div>
                <InputGroup>
                    <h5>Username</h5>
                    <Input onChange={(event) => updateUsername(event.target.value)} />
                </InputGroup>
                <InputGroup>
                    <h5>Password</h5>
                    <Input type="password"
                        onChange={(event) => updatePassword(event.target.value)} />
                </InputGroup>
                <InputGroup>
                    <h5>Password</h5>
                    <Input type="password"
                        onChange={(event) => updateConfirmPassword(event.target.value)} />
                </InputGroup>
                <InputGroup style={{ marginTop: "1em" }}>
                    <Button type="primary"
                        onClick={() => SignIn(username, password, confirmpassword)}>Sign In</Button>
                </InputGroup>
            </div>
        </Col>
        <Col span={8}></Col>
    </Row>
}