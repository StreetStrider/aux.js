
import { T_Key } from './dict'

export type T_Registry <Key extends T_Key = T_Key, Value = unknown> =
{
	get (key: Key): Value;
	set (key: Key, value: Value): Value;
	has (key: Key): boolean;
	each (fn: (value: Value) => void): void;
	keys (): Key;
	is_empty (): boolean;
	remove (key: Key): Value;
	clear (): void;
}

export default function <Key extends T_Key = T_Key, Value = unknown>
(
	fn_init?: (key: Key) => Value
)
:
T_Registry<Key, Value>
