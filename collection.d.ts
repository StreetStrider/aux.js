
export type T_Collection <Value = unknown> =
{
	add (value: Value): Value;
	has (value: Value): boolean;
	is_empty (): boolean;
	each (fn: (value: Value) => void): void;
	remove (value: Value): Value;
	clear (): void;
}

export default function <Value = unknown> (): T_Collection<Value>
