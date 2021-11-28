
export type T_Collection <Value = unknown> =
{
	add (value: Value): Value;
	has (value: Value): boolean;
	each (fn: (value: Value) => void): void;
	remove (value: Value): Value;
}

export default function <Value = unknown> (): T_Collection<Value>
