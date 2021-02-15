type MessageSet = {
  entries: [key in string]: Message | MessageSet
  meta: Meta?
}

type Message = {
  value: Value | Select
  meta: Meta?
}

interface Select {
  select: Value[]
  cases: Array<{ key: Literal; value: Value }>
  meta: Meta?
}

type Value = Literal | Expression

type Expression = {
  value: VariableReference | FunctionReference | MessageReference
  meta: Meta?
}

type Literal = string | number

type VariableReference = {
  path: Path
  meta: Meta?
}

interface FunctionReference {
  func: string
  args: Value[]
  options?: Record<string, Literal | boolean | Expression>
  meta: Meta?
}

interface MessageReference {
  msg: Path
  options?: Record<string, Literal | boolean | Expression>
  meta: Meta?
}

interface Path = Value[]

interface Meta = ?
