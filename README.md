# cloud-formation-dsl

Writing cloud-formation templates by hand sucks, so this is a spike at a TypeScript DSL for creating them.

Currently everything is hand-written, to flush out the concepts/approach, but ideally the props would be generated from the Cloud Formation JSON spec.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html

Turns out there are a lot of these:

* TypeScript: https://github.com/bright/cloudform
* Scala: https://github.com/mshibuya/cloudformal
* Scala: https://github.com/MonsantoCo/cloudformation-template-generator
* Python: https://github.com/cloudtools/troposphere

