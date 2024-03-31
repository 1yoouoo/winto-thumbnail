"use client";

import TemplateDataProcessor from "@/components/TemplateDataProcessor";
import { useSearchParams } from "next/navigation";
import { parseQueryString } from "../../../utils/formatJson";
import { Suspense } from "react";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(`${queryString}`);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplateDataProcessor parsedQueryString={parsedQueryString} />
    </Suspense>
  );
}
