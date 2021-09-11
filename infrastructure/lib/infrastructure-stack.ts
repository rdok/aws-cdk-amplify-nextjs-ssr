import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";
import * as amplify from "@aws-cdk/aws-amplify";
import * as codebuild from '@aws-cdk/aws-codebuild';
import * as iam from '@aws-cdk/aws-iam';
import buildSpec from './build-spec'


export class InfrastructureStack extends cdk.Stack {
   name = 'next-js-with-ssr'
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const repository = new codecommit.Repository(
            this,
            "NextJSwithSSR",
            {
                repositoryName: this.name,
                description: "Next.js with SSR page",
            }
        );

        const amplifyApp = new amplify.App(
            this,
            this.name,
            {
                sourceCodeProvider: new amplify.CodeCommitSourceCodeProvider({repository: repository}),
                buildSpec: codebuild.BuildSpec.fromObjectToYaml(buildSpec)
            }
        );
        amplifyApp.addBranch("main");

        amplifyApp.grantPrincipal.addToPrincipalPolicy(new iam.PolicyStatement({
            resources: [
                "cloudfront:*",
                "s3:*",
                "lambda:*"
            ],
            actions: ['*'],
        }))
    }
}
