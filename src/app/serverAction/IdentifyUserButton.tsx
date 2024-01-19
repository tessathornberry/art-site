"use client";
import { useState } from "react";

export default function IdentifyUserButton({
  identifyUserAction,
}: {
  identifyUserAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();

  return (
    <div>
      <button
        onClick={async () => {
          setName(await identifyUserAction());
        }}
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}
