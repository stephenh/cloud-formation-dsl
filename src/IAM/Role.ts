
import { resources } from '../resources';

/** See {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html}. */
export interface AWS_IAM_RoleProps {
  AssumeRolePolicyDocument: any;
  RoleName?: string;
  Path?: string;
  ManagedPolicyUrns?: string[];
}

/** See {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html}. */
export function AWS_IAM_Role(
  name: string,
  properties: AWS_IAM_RoleProps) {
  resources.push([name, "AWS::IAM::Role", properties])
  return { Name: name, Ref: 'Ref', Arn: 'Arn' };
}