"use client";

import * as React from "react";
import {serverAction} from "./serverAction";

export const ButtonServerAction = () => {
  return <button onClick={async () => {
    alert(await serverAction())
  }}>Run Server Action</button>;
};
