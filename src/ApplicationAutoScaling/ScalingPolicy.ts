
import { resources } from '../resources';

// For dynamo target scaling, and a scaling target
export interface AWS_ApplicationAutoScaling_ScalingPolicyProps_DynamoTarget {
  PolicyName: string;
  PolicyType: "TargetTrackingScaling";
  ScalingTargetId: string;
  TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
}

export interface TargetTrackingScalingPolicyConfiguration {
  TargetValue: number | string;
  ScaleInCooldown: number | string;
  ScaleOutCooldown: number | string;
  PredefinedMetricSpecification: AWS_Application_AutoScaling_ScalingPolicy_PredefinedMetricSpecification;
}

export interface AWS_Application_AutoScaling_ScalingPolicy_PredefinedMetricSpecification {
  PredefinedMetricType: PredefinedMetricSpecification;
}

// For non-dynamo step scaling, and a scaling target
export interface AWS_ApplicationAutoScaling_ScalingPolicyProps_ScalingTarget {
  PolicyName: string;
  PolicyType: "StepScaling";
  ScalingTargetId: string;
}

export type PredefinedMetricSpecification = "DynamoDBReadCapacityUtilization"
  | "DynamoDBWriteCapacityUtilization"
  | "ALBRequestCountPerTarget"
  | "RDSReaderAverageCPUUtilization"
  | "RDSReaderAverageDatabaseConnections"
  | "EC2SpotFleetRequestAverageCPUUtilization"
  | "EC2SpotFleetRequestAverageNetworkIn"
  | "EC2SpotFleetRequestAverageNetworkOut"
  | "SageMakerVariantInvocationsPerInstance"
  | "ECSServiceAverageCPUUtilization"
  | "ECSServiceAverageMemoryUtilization"

export function AWS_ApplicationAutoScaling_ScalingPolicy(
  name: string,
  properties: AWS_ApplicationAutoScaling_ScalingPolicyProps_DynamoTarget | AWS_ApplicationAutoScaling_ScalingPolicyProps_ScalingTarget) {
  resources.push([name, "AWS::ApplicationAutoScaling::ScalingPolicy", properties])
  return { Name: name, Ref: 'Ref' };
}