
import { AWS_ApplicationAutoScaling_ScalableTarget, AWS_ApplicationAutoScaling_ScalingPolicy } from "./ApplicationAutoScaling";
import { resources } from '@src/resources';
import { AWS_IAM_Role } from '@src/IAM';
import { Arn, Parameter, Ref } from '.';

const DynamoMaxCapacity = Parameter("DynamoMaxCapacity");
const DynamoMinCapacity = Parameter("DynamoMinCapacity");

const DynamoDBAutoScalingRole = AWS_IAM_Role("DynamoDBAutoScalingRole", {
  AssumeRolePolicyDocument: "..."
});

const EmployeeTableReadCapacityScalableTarget = AWS_ApplicationAutoScaling_ScalableTarget(
  "EmployeeTableReadCapacityScalableTarget", {
    MaxCapacity: Ref(DynamoMaxCapacity),
    MinCapacity: Ref(DynamoMinCapacity),
    ResourceId: "table/Employee",
    RoleARN: Arn(DynamoDBAutoScalingRole),
    ScalableDimension: "dynamodb:table:ReadCapacityUnits",
    ServiceNamespace: "dynamodb"
  })

const EmployeeTableWriteScalingPolicy = AWS_ApplicationAutoScaling_ScalingPolicy(
  "EmployeeTableWriteScalingPolicy", {
    PolicyName: "EmployeeTableWriteAutoScalingPolicy",
    PolicyType: "TargetTrackingScaling",
    ScalingTargetId: "Ref: EmployeeTableWriteCapacityScalableTarget",
    TargetTrackingScalingPolicyConfiguration: {
      TargetValue: "Ref: DynamoDBTableScalingThreshold",
      ScaleInCooldown: "Ref: DynamoDBScaleInOutCooldown",
      ScaleOutCooldown: "Ref: DynamoDBScaleInOutCooldown",
      PredefinedMetricSpecification: {
        PredefinedMetricType: "DynamoDBWriteCapacityUtilization"
      }
    }
  });

resources.forEach(resource => {
  const [name, type, props] = resource
  console.log(name)
})
