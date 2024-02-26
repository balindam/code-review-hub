import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';

const poolData: ICognitoUserPoolData = {
    UserPoolId: 'us-east-1_37142922',
    ClientId: '479627828132-q993092k54094'
}

const userPool = new CognitoUserPool(poolData);