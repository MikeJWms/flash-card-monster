import { ReactNode } from "react";

export default function DefaultLayout(props: { children: ReactNode }) {
  return <div className="p-4">{props.children}</div>;
}
