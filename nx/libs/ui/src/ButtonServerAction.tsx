"use client";

import * as React from "react";
import {serverAction} from "./serverAction";

export default function ButtonServerAction() {
  return <button
    className="test"
    onClick={async () => {
      alert(await serverAction())
    }}
  >
    Run Server Action
  </button>;
};

