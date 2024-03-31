"use client";

import { useSearchParams } from "next/navigation";
import { parseQueryString } from "../../../../utils/v2/formatJson";
import { ParsedQueryString } from "@/types/v2/model";
import TemplateDataProcessor from "@/components/v2/TemplateDataProcessor";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(
    `${queryString}`
  ) as ParsedQueryString;

  return <TemplateDataProcessor parsedQueryString={parsedQueryString} />;
}
