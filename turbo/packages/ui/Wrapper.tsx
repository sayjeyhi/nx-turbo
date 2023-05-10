"use client";

import * as React from "react";
import './styles.css';

export default function Wrapper({ children }: any) {
  return <div className="wrapper">{children}</div>;
};
