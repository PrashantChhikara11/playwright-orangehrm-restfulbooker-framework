# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\restfull-booker-api-module.spec.ts >> [Restful-Booker > Booking] Verify that user is able to fetch all the booking IDs 
- Location: tests\api\restfull-booker-api-module.spec.ts:16:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "200"
Received: 200
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/hooks-fixtires'
  2  | 
  3  | // test('API Test',async({request})=>{
  4  | 
  5  | //     const bookingIDs=await request.get('booking')
  6  | //     console.log(await bookingIDs.json())
  7  | // })
  8  | 
  9  | // test('Api Test 2',async({request})=>{
  10 | 
  11 | //     const bookingDetails=await request.get('booking/1')
  12 | //     console.log(await bookingDetails.json())
  13 | // })
  14 | 
  15 | 
  16 | test('[Restful-Booker > Booking] Verify that user is able to fetch all the booking IDs ',{
  17 |     tag:["@API","@UAT"],
  18 |     annotation:{
  19 |         type:"Get API",
  20 |         description:"Get API from Booker"
  21 |     }
  22 | },async({request})=>{
  23 | 
  24 |     const bookingIdsResp =await request.get("booking");
  25 |     const bookingIdsJsonResp=bookingIdsResp.json();
  26 |     console.log(bookingIdsJsonResp);
  27 | 
> 28 |      expect(bookingIdsResp.status()).toBe("200");
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |      expect(bookingIdsResp.statusText()).toBe("ok");
  30 |      expect(bookingIdsResp.ok()).toBeTruthy()
  31 | 
  32 |      console.log(`the content-type ${bookingIdsResp.headers()["content-type"]}`)
  33 | 
  34 | 
  35 | 
  36 | })
```