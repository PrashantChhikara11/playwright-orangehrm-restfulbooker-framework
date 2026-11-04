# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\restfull-booker-api-module.spec.ts >> Verify that user is able to fetch booking details
- Location: tests\api\restfull-booker-api-module.spec.ts:43:5

# Error details

```
SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/hooks-fixtires'
  2  | import apiPathData from '../../testdata/api-path-data.json'
  3  | import restfulApiBookerData from '../../testdata/restful-api-booker-data.json'
  4  | 
  5  | // test('API Test',async({request})=>{
  6  | 
  7  | //     const bookingIDs=await request.get('booking')
  8  | //     console.log(await bookingIDs.json())
  9  | // })
  10 | 
  11 | // test('Api Test 2',async({request})=>{
  12 | 
  13 | //     const bookingDetails=await request.get('booking/1')
  14 | //     console.log(await bookingDetails.json())
  15 | // })
  16 | 
  17 | 
  18 | test('[Restful-Booker > Booking] Verify that user is able to fetch all the booking IDs ',{
  19 |     tag:["@API","@UAT"],
  20 |     annotation:{
  21 |         type:"Get API",
  22 |         description:"Get API from Booker"
  23 |     }
  24 | },async({request})=>{
  25 | 
  26 |     const bookingIdsResp =await request.get(apiPathData.booking_path);
  27 |     const bookingIdsJsonResp=await bookingIdsResp.json();
  28 |     console.log(bookingIdsJsonResp);
  29 | 
  30 |      expect(bookingIdsResp.status()).toBe(200);
  31 |      expect(bookingIdsResp.statusText()).toBe("OK");
  32 |      expect(bookingIdsResp.ok()).toBeTruthy()
  33 | 
  34 |      console.log(`the content-type ${bookingIdsResp.headers()["server"]}`)
  35 | 
  36 |      expect(bookingIdsResp.headers()["content-type"]).toBe(restfulApiBookerData.content_type);
  37 |      expect(bookingIdsJsonResp).not.toBeNull();
  38 | 
  39 | 
  40 | 
  41 | })  
  42 | 
  43 | test("Verify that user is able to fetch booking details",{
  44 |     tag:['@API'],
  45 |     annotation:{
  46 |         type:"Get Call",
  47 |         description:"Fetch from booking ID"
  48 |     }
  49 | },async({request})=>{
  50 | 
  51 |    const bookingResp= await request.get(`${apiPathData.booking_path}/${restfulApiBookerData.bookind_id}`)
> 52 |     const bookingJsonResp=await bookingResp.json()
     |                           ^ SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
  53 |     console.log(bookingJsonResp)
  54 | })
```