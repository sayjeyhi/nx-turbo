import * as React from "react";

export function Header({ children }: { children: string }) {
  return <header style={{ width: "calc(100% - 96px)", background:"#efefef", padding: 24, margin: 24, borderRadius: 12 }}><h1>{children}</h1></header>;
}
