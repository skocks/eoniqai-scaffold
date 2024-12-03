import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class CognitoPool extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const userPool = new cognito.UserPool(this, 'EoniqAiUserPool', {
            userPoolName: 'eoniqai-userpool',
            signInCaseSensitive: false,
            lambdaTriggers: {
//                postAuthentication: /* Your Lambda function here */,
            },
        });

        const appClient = userPool.addClient('EoniqAiClient', {
            authFlows: {
                userPassword: true,
            },
        });
    }
}