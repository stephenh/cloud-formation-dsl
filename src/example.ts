
import { AWS_ApplicationAutoScaling_ScalableTarget, AWS_ApplicationAutoScaling_ScalingPolicy } from "@src/ApplicationAutoScaling";
import { resources } from '@src/resources';
import { AWS_IAM_Role } from '@src/IAM';
import { Arn, Parameter, Ref } from '.';

const DynamoMinCapacity = Parameter("DynamoMinCapacity");
const DynamoMaxCapacity = Parameter("DynamoMaxCapacity");
const DynamoDBScaleInOutCooldown = Parameter("DynamoDBScaleInOutCooldown");
const DynamoDBTableScalingThreshold = Parameter("DynamoDBTableScalingThreshold")

const DynamoDBAutoScalingRole = AWS_IAM_Role("DynamoDBAutoScalingRole", {
  AssumeRolePolicyDocument: "..."
});

const EmployeeTableWriteCapacityScalableTarget = AWS_ApplicationAutoScaling_ScalableTarget(
  "EmployeeTableWriteCapacityScalableTarget", {
    ResourceId: "table/Employee",
    MinCapacity: Ref(DynamoMinCapacity),
    MaxCapacity: Ref(DynamoMaxCapacity),
    RoleARN: Arn(DynamoDBAutoScalingRole),
    ScalableDimension: "dynamodb:table:WriteCapacityUnits",
    ServiceNamespace: "dynamodb"
  });

const EmployeeTableWriteScalingPolicy = AWS_ApplicationAutoScaling_ScalingPolicy(
  "EmployeeTableWriteScalingPolicy", {
    PolicyName: "EmployeeTableWriteScalingPolicy",
    PolicyType: "TargetTrackingScaling",
    ScalingTargetId: Ref(EmployeeTableWriteCapacityScalableTarget),
    TargetTrackingScalingPolicyConfiguration: {
      TargetValue: Ref(DynamoDBTableScalingThreshold),
      ScaleInCooldown: Ref(DynamoDBScaleInOutCooldown),
      ScaleOutCooldown: Ref(DynamoDBScaleInOutCooldown),
      PredefinedMetricSpecification: {
        PredefinedMetricType: "DynamoDBWriteCapacityUtilization"
      }
    }
  });

const EmployeeTableReadCapacityScalableTarget = AWS_ApplicationAutoScaling_ScalableTarget(
  "EmployeeTableReadCapacityScalableTarget", {
    ResourceId: "table/Employee",
    MinCapacity: Ref(DynamoMinCapacity),
    MaxCapacity: Ref(DynamoMaxCapacity),
    RoleARN: Arn(DynamoDBAutoScalingRole),
    ScalableDimension: "dynamodb:table:ReadCapacityUnits",
    ServiceNamespace: "dynamodb"
  });

const EmployeeTableReadScalingPolicy = AWS_ApplicationAutoScaling_ScalingPolicy(
  "EmployeeTableReadScalingPolicy", {
    PolicyName: "EmployeeTableReadScalingPolicy",
    PolicyType: "TargetTrackingScaling",
    ScalingTargetId: Ref(EmployeeTableReadCapacityScalableTarget),
    TargetTrackingScalingPolicyConfiguration: {
      TargetValue: Ref(DynamoDBTableScalingThreshold),
      ScaleInCooldown: Ref(DynamoDBScaleInOutCooldown),
      ScaleOutCooldown: Ref(DynamoDBScaleInOutCooldown),
      PredefinedMetricSpecification: {
        PredefinedMetricType: "DynamoDBReadCapacityUtilization"
      }
    }
  });

resources.forEach(resource => {
  const [name, type, props] = resource
  console.log(name)
})
