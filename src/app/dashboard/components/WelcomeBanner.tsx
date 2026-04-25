"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function WelcomeBanner({ recruiterName }: { recruiterName: string }) {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setTime(dayjs()), 30000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.hour();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";

  return (
    <div className="w-full bg-surface-secondary border-b border-border-default px-6 py-5">
      <div className="flex items-baseline gap-3">
        <h2 className="font-syne text-[28px] font-semibold text-zinc-900 dark:text-zinc-100">
          {greeting}, {recruiterName}
        </h2>
        <span className="font-mono text-xs text-zinc-400">
          {time.format("HH:mm")}
        </span>
      </div>
      <p className="font-sans text-sm text-zinc-500 italic mt-1">
        &quot;Take it slow. Progress compounds.&quot;
      </p>
    </div>
  );
}
