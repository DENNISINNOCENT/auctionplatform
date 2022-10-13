import React, { useState } from "react";
import { Button, Error, Input, FormField, Label} from "../styles";

function SignUpForm({ onLogin }) {
  const [firstname, setFirstname] =useState("");
  const [lastname, setLastname] =useState("");
  const [middlename, setMiddlename] = useState("");
  const [email, setEmail] =useState(""); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        middlename,
        lastname,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
      <Label htmlFor="firstname">Firstname</Label>
        <input
          type="text"
          id="firstname"
          autoComplete="off"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        </FormField>
        <FormField>
        <Label htmlFor="middlename">Middlename</Label>
        <input
          type="text"
          id="lastname"
          autoComplete="off"
          value={middlename}
          onChange={(e) => setMiddlename(e.target.value)}
        />
        </FormField>
        <FormField>
        <Label htmlFor="lastname">Lastname</Label>
        <input
          type="text"
          id="lastname"
          autoComplete="off"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </FormField>
        <FormField>
        <Label htmlFor="email">Email</Label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
     
      
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
