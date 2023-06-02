import {NodeProps} from "type/layout";

export default function PageBody(props: NodeProps) {
  return (
    <div className="page-body">
      {props.children}
    </div>
  );
}
