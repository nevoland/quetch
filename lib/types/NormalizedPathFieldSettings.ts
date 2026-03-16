import type { FieldFiltered } from "./FieldFiltered";

/**
 * Settings for fields that contain path values of items, used for displaying items in a tree.
 */
export type NormalizedPathFieldSettings<T> = {
  /**
   * Path to the field that contains the path value of an item, used for displaying items in a tree.
   *
   * @default "path"
   */
  pathField?: FieldFiltered<T, string>;
  /**
   * String used to escape the separator.
   *
   * @default "\\"
   */
  pathFieldSeparatorEscape?: string;
  /**
   * Maps path fields to a string used to separate the path nodes of a field value.
   *
   * @default "/"
   */
  pathFieldSeparator?: string;
};
