"use client";

import * as React from "react";
import './styles.css';

export const Button = () => {
  return <button className="button" onClick={async () => {
    alert("Hi")
  }}>say Hi!</button>;
};
