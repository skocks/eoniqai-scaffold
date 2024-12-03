import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as EoniqaiScaffold from "../lib/eoniqai-scaffold-stack";

test("SQS Queue Created", () => {
  const app = new cdk.App();
  const stack = new EoniqaiScaffold.EoniqaiScaffoldStack(
    app,
    "EoniqAiTestStack"
  );
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::Cognito::UserPool", {
    UserPoolName: "eoniqai-userpool",
    UsernameConfiguration: { CaseSensitive: false },
  });

  template.hasResourceProperties("AWS::Cognito::UserPoolClient", {
    ExplicitAuthFlows: Match.arrayWith([ 'ALLOW_USER_PASSWORD_AUTH' ]),
  });
});
