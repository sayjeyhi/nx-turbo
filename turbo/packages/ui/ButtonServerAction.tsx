"use client";

import * as React from "react";
import {serverAction} from "./serverAction";

export default function ButtonServerAction() {
  return <button
    className="button"
    onClick={async () => {
      alert(await serverAction())
    }}
  >
    Run Server Action
  </button>;
};

