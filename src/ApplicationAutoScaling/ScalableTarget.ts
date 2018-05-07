
import { resources } from '../resources';

export interface AWS_ApplicationAutoScaling_ScalableTargetProps {
  MaxCapacity: number | string;
  MinCapacity: number | string;
  ResourceId: string;
  RoleARN: string;
  ScalableDimension: string;
  ServiceNamespace: string;
}

export function AWS_ApplicationAutoScaling_ScalableTarget(
  name: string,
  properties: AWS_ApplicationAutoScaling_ScalableTargetProps) {
  resources.push([name, "AWS::ApplicationAutoScaling::ScalableTarget", properties])
  return { Name: name, Ref: 'Ref' };
}