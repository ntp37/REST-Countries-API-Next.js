import React from "react";

function IconTitle({ icon, title }) {
  return (
    <div className="flex sm:gap-3 gap-2 items-center">
      <div className="flex text-xl sm:text-2xl">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

export function TableBody({ details, icon, title }) {
  return (
    <tr>
      <th>
        <IconTitle icon={icon} title={title} />
      </th>
      <td>{details}</td>
    </tr>
  );
}
