"use client";

import { useSearchParams } from "next/navigation";
import { ParsedQueryString } from "@/types/v2/model";
import { parseQueryString } from "@/app/utils/v2/formatJson";
import TemplateDataProcessor from "@/components/v2/NA/TemplateDataProcessor";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(
    `${queryString}`
  ) as ParsedQueryString;

  return <TemplateDataProcessor parsedQueryString={parsedQueryString} />;
}
