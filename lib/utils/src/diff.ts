import DeepDiff from "deep-diff";
/**
 * Deep diff between two object, using lodash
 */
export function diff(
  object: unknown,
  base: unknown
): DeepDiff.Diff<unknown, unknown>[] | undefined {
  return DeepDiff.diff(object, base);
}
