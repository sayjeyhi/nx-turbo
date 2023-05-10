"use client";

import * as React from "react";
import './styles.css';

export default function Button() {
  return <button className="button" onClick={async () => {
    alert("Hi")
  }}>say Hi!</button>;
};
