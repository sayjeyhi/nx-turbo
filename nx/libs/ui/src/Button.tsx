"use client";

import * as React from "react";

export const Button = () => {
  return <button onClick={async () => {
    alert("Hi")
  }}>say Hi!</button>;
};
