
/** Fn::Ref, takes any resources that has a CF name and a marker Ref attribute. */
export function Ref(o: { Name: string, Ref: string }): string {
  return `!Ref: ${o.Name}`
}

/** Shortcut for GetAttr+Arn, takes any resources that has a CF name and a marker Arn attribute. */
export function Arn(o: { Name: string, Arn: string }): string {
  return `!GetAtt: ${o.Name}.${o.Arn}`
}

/** Fn::GetAttr, takes any resources that has a CF name and a marker attribute. */
export function GetAttr<T extends { Name: string }, K extends keyof T>(o: T, k: K): string {
  return `!GetAtt: ${o.Name}.${k}`
}

/** A CloudFormation parameter. */
export function Parameter(name: string) {
  /** Parameters are ref'able, and the value is the name, which is resolved by CF. */
  return { Name: name, Ref: 'Ref' };
}