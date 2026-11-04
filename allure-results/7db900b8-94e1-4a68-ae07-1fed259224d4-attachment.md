# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\restfull-booker-api-module.spec.ts >> Verify that user is able to fetch booking details
- Location: tests\api\restfull-booker-api-module.spec.ts:43:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "Jane"
Received: "Josh"
```

# Test source

```ts
  1   | import {test,expect} from '../../fixtures/hooks-fixtires'
  2   | import apiPathData from '../../testdata/api-path-data.json'
  3   | import restfulApiBookerData from '../../testdata/restful-api-booker-data.json'
  4   | 
  5   | // test('API Test',async({request})=>{
  6   | 
  7   | //     const bookingIDs=await request.get('booking')
  8   | //     console.log(await bookingIDs.json())
  9   | // })
  10  | 
  11  | // test('Api Test 2',async({request})=>{
  12  | 
  13  | //     const bookingDetails=await request.get('booking/1')
  14  | //     console.log(await bookingDetails.json())
  15  | // })
  16  | 
  17  | 
  18  | test('[Restful-Booker > Booking] Verify that user is able to fetch all the booking IDs ',{
  19  |     tag:["@API","@UAT"],
  20  |     annotation:{
  21  |         type:"Get API",
  22  |         description:"Get API from Booker"
  23  |     }
  24  | },async({request})=>{
  25  | 
  26  |     const bookingIdsResp =await request.get(apiPathData.booking_path);
  27  |     const bookingIdsJsonResp=await bookingIdsResp.json();
  28  |     console.log(bookingIdsJsonResp);
  29  | 
  30  |      expect(bookingIdsResp.status()).toBe(200);
  31  |      expect(bookingIdsResp.statusText()).toBe("OK");
  32  |      expect(bookingIdsResp.ok()).toBeTruthy()
  33  | 
  34  |      console.log(`the content-type ${bookingIdsResp.headers()["server"]}`)
  35  | 
  36  |      expect(bookingIdsResp.headers()["content-type"]).toBe(restfulApiBookerData.content_type);
  37  |      expect(bookingIdsJsonResp).not.toBeNull();
  38  | 
  39  | 
  40  | 
  41  | })  
  42  | 
  43  | test("Verify that user is able to fetch booking details",{
  44  |     tag:['@API'],
  45  |     annotation:{
  46  |         type:"Get Call",
  47  |         description:"Fetch from booking ID"
  48  |     }
  49  | },async({request})=>{
  50  | 
  51  |    const bookingResp= await request.get(`${apiPathData.booking_path}/${restfulApiBookerData.bookind_id}`)
  52  |     const bookingJsonResp=await bookingResp.json()
  53  |     console.log(bookingJsonResp)
  54  |     expect(bookingResp.status()).toBe(200)
  55  |     expect(bookingResp.statusText()).toBe("OK")
  56  |     expect(bookingResp).not.toBeNull()
  57  |     expect(bookingJsonResp.firstname).not.toBeNull()
> 58  |     expect(bookingJsonResp.firstname).toEqual("Jane")
      |                                       ^ Error: expect(received).toEqual(expected) // deep equality
  59  |     expect(bookingJsonResp.lastname).toEqual("Doe")
  60  | 
  61  | })
  62  | 
  63  | test('Verify that user is able to create new booking using post api',
  64  |     {
  65  |         tag:['@API'],
  66  |         annotation:{
  67  |             type:'Post Api Call',
  68  |             description:'sending data through post API'
  69  |         }
  70  |     },async({request})=>{
  71  | 
  72  |        const createBookingResp= await request.post(apiPathData.booking_path,
  73  |             {
  74  |                 data:restfulApiBookerData.create_booking
  75  |             })
  76  | 
  77  |        const createBookingJsonResp= await createBookingResp.json()
  78  |        expect(createBookingResp.status()).toBe(200)
  79  |        expect(createBookingJsonResp.booking).toMatchObject(restfulApiBookerData.create_booking)
  80  |        console.log(createBookingJsonResp.bookingid)
  81  |         
  82  |     })  
  83  | 
  84  |     test('verify that user is able to test put API and recieve valid res',
  85  |         {
  86  |             tag:['@API'],
  87  |             annotation:{
  88  |                 type:'Put API',
  89  |                 description:'Put Booker API'
  90  |             }
  91  |         },
  92  |         async({request,commonApiUtils})=>{
  93  | 
  94  |        const token=await commonApiUtils.createToken();
  95  | 
  96  |        const updateBookingResp=await request.put(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`,
  97  |                 {
  98  |                     headers:{Cookie:`token=${token}`},
  99  |                     data:restfulApiBookerData.update_booking}
  100 |             )
  101 | 
  102 |             console.log(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`)
  103 | 
  104 |             console.log(`Token is ${token}`)
  105 |             
  106 |         const updateBookingRespJson=await updateBookingResp.json()
  107 |        console.log(updateBookingRespJson)
  108 |        expect(updateBookingResp.status()).toBe(200)
  109 |        expect(updateBookingResp.statusText()).toBe("OK")
  110 |        expect(updateBookingRespJson).toMatchObject(restfulApiBookerData.update_booking)
  111 | 
  112 | 
  113 | 
  114 | 
  115 |     })
  116 | 
  117 | 
  118 |     test('Verify that user can partially update the existing booking',
  119 |         {
  120 |             tag:['@UAT','@API'],
  121 |             annotation:{
  122 |                 type:'Patch',
  123 |                 description:'testing Patch'
  124 |             }
  125 |         },async({request,commonApiUtils})=>{
  126 | 
  127 |             const token=await commonApiUtils.createToken();
  128 |             const patchResponse=await request.patch(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`,{
  129 |                 headers:{
  130 |                     Cookie:`token=${token}`,
  131 |                     
  132 |                 },
  133 |                 data:restfulApiBookerData.update_partial_booking
  134 |             })
  135 |             console.log(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`)
  136 |             console.log(restfulApiBookerData.update_partial_booking)
  137 |             const patchResponseJson=await patchResponse.json()
  138 |             console.log(patchResponse)
  139 |             console.log(patchResponseJson)
  140 |             
  141 | 
  142 |         }
  143 |         
  144 |     )
  145 | 
  146 |     test('verify that user is able to delete booking using delete API',{
  147 |         tag:['@UAT','@API'],
  148 |         annotation:{
  149 |             type:'Delete API',
  150 |             description:'Delete API from Booker'
  151 |         }
  152 |     },async({request,commonApiUtils})=>{
  153 |         const token=await commonApiUtils.createToken();
  154 |         const deleteBookingResp=await request.delete(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id3}`,{
  155 |             headers:{Cookie:`token=${token}`}
  156 |         })
  157 |       
  158 | 
```