"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { parseQueryString } from "../../../../utils/v2/formatJson";
import { ParsedQueryString } from "@/types/v2/model";
import TemplateDataProcessor from "@/components/v2/TemplateDataProcessor";

function QueryStringComponent() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(
    `${queryString}`
  ) as ParsedQueryString;

  return <TemplateDataProcessor parsedQueryString={parsedQueryString} />;
}

function QueryStringFallback() {
  return <>Loading...</>;
}

export default function Page() {
  return (
    <Suspense fallback={<QueryStringFallback />}>
      <QueryStringComponent />
    </Suspense>
  );
}
