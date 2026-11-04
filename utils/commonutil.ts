import CryptoJS from "crypto-js";
//import { error } from "node:console";



export default class commonUtils
{


    private secretKey:string;

    constructor()
    {
       // this.secretKey=process.env.SECRETKEY ? process.env.SECRETKEY : "Please provide secret key"

       if(process.env.SECRET_KEY)
       {
        this.secretKey=process.env.SECRET_KEY;
       }
       else{
        throw new Error("Please provide secret key");
       }
    }


    public encryptData(data:string)
    {
        const encryptedData=CryptoJS.AES.encrypt(data,this.secretKey).toString();
        console.log(encryptedData)
        return encryptedData
    }

    public decryptData(encryptedData:string)
    {
        const decryptedData=CryptoJS.AES.decrypt(encryptedData,this.secretKey).toString(CryptoJS.enc.Utf8)
        console.log(decryptedData)
        return decryptedData
    }

}
