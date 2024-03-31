"use client";

import TemplateDataProcessor from "@/components/TemplateDataProcessor";
import { useSearchParams } from "next/navigation";
import { parseQueryString } from "../../../utils/formatJson";

export default function Page() {
  const queryString = useSearchParams();
  const parsedQueryString = parseQueryString(`${queryString}`);
  return <TemplateDataProcessor parsedQueryString={parsedQueryString} />;
}
