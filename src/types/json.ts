export type JSONValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [x: string]: JSONValue }
  | Array<JSONValue>
