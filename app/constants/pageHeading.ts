import { Metadata } from "next";

export function generateMetadata(
  pageSuffix: string
): Metadata {

  return {
    title: HEADING_PREFIX + pageSuffix
  };
}


export const HEADING_PREFIX = "Lytic | ";
