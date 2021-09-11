import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";
import * as amplify from "@aws-cdk/aws-amplify";

export class InfrastructureStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const repository = new codecommit.Repository(
            this,
            "NextJSwithSSR",
            {
                repositoryName: "next-js-with-ssr",
                description: "Next.js with SSR page",
            }
        );

        const amplifyApp = new amplify.App(
            this,
            "next-js-with-ssr",
            {sourceCodeProvider: new amplify.CodeCommitSourceCodeProvider({repository: repository}),}
        );
        amplifyApp.addBranch("main");
    }
}
