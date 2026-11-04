import { APIRequestContext } from "@playwright/test";
import apiPathData from '../testdata/api-path-data.json'
import apiBookerData from '../testdata/restful-api-booker-data.json'

export class commonApiUtils
{

    readonly request:APIRequestContext;

    constructor(request:APIRequestContext)
    {
        this.request=request;
    }

    public async createToken()
    {
    const createTokenResp=await this.request.post(apiPathData.auth_path,
        {
                   data:
                        {
                         "username":process.env.API_USER_NAME!,
                        "password":process.env.API_PASSWORD!
                        }
         });
    const createTokenJsonResp=  await createTokenResp.json();   
    
    
         return createTokenJsonResp.token
    }

}