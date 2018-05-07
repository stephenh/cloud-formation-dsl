
import { resources } from '../resources';

export interface AWS_ApplicationAutoScaling_ScalableTargetProps {
  ResourceId: string;
  RoleARN: string;
  ScalableDimension: string;
  ServiceNamespace: string;
  MaxCapacity: number | string;
  MinCapacity: number | string;
}

export function AWS_ApplicationAutoScaling_ScalableTarget(
  name: string,
  properties: AWS_ApplicationAutoScaling_ScalableTargetProps) {
  resources.push([name, "AWS::ApplicationAutoScaling::ScalableTarget", properties])
  return { Name: name, Ref: 'Ref', Props: properties };
}