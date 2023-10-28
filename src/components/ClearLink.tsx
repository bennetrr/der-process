import React from "react";

export default function ClearLink({children: c}: { children: string }) {
    return <a href={c}>{c}</a>;
}
