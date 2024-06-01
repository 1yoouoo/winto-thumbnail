"use client";

import { useSearchParams } from "next/navigation";
import { ParsedQueryString } from "@/types/v2/model";
import TestDataProcessor from "@/app/test/TestDataProcessor";
import { parseQueryString } from "../../../utils/v2/formatJson";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(
    `${queryString}`
  ) as ParsedQueryString;

  return <TestDataProcessor parsedQueryString={parsedQueryString} />;
}
