import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getComponents } from "./components/mdx/MdxComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getComponents(components);
}
