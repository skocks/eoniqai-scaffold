import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CognitoPool } from './cognito';

export class EoniqaiScaffoldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CognitoPool(this, 'EoniqAiCognitoPool');
  }
}
