import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";
import * as amplify from "@aws-cdk/aws-amplify";

export class  InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repository = new codecommit.Repository(
        this,
        "NextJSSSRAWSAmplify",
        {
          repositoryName: "next-jsr-ssr-aws-amplify",
          description:
              "CodeCommit repository that will be used as the source repository for next.js showcase",
        }
    );

    const amplifyApp = new amplify.App(this, "next-jsr-ssr-aws-amplify", {
      sourceCodeProvider: new amplify.CodeCommitSourceCodeProvider({
        repository: repository,
      }),
    });
    amplifyApp.addBranch("main");
  }
}
