"use client";

import React, { useEffect, useState } from "react";

export function ConditionalWrapper({
  components,
}: {
  components: { component: React.ReactNode; isMobile: boolean }[];
}) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (!window) return;
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
  });
  return (
    <>
      {isMobile
        ? components.filter((c) => c.isMobile === true)
        : components.filter((c) => isMobile === false)}
    </>
  );
}
