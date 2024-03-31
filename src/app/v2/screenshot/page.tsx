"use client";

import { useSearchParams } from "next/navigation";
import { parseQueryString } from "../../../../utils/v2/formatJson";
import { ParsedQueryString } from "@/types/v2/model";
import TemplateDataProcessor from "@/components/v2/TemplateDataProcessor";
import { Suspense } from "react";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(
    `${queryString}`
  ) as ParsedQueryString;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplateDataProcessor parsedQueryString={parsedQueryString} />
    </Suspense>
  );
}
