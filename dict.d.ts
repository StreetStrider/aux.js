
export type T_Key = (string | number | symbol)

export default function <Key extends T_Key = T_Key, Value = unknown> (): Record<Key, Value>
