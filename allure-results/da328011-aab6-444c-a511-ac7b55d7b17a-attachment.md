# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ..\api\restfull-booker-api-module.spec.ts >> verify that user is able to delete booking using delete API
- Location: tests\api\restfull-booker-api-module.spec.ts:146:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 403
```

# Test source

```ts
  59  |     expect(bookingJsonResp.lastname).toEqual("Smith")
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
  106 |        const updateBookingRespJson=await updateBookingResp.json()
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
> 159 |         expect(deleteBookingResp.status()).toBe(201)
      |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  160 |         expect(deleteBookingResp.statusText()).toBe("Created")
  161 | 
  162 |        const getBookingResp= await request.get(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id3}`)
  163 |        expect(getBookingResp.status()).toBe(404)
  164 |         expect(getBookingResp.statusText()).toBe("Not Found")
  165 | 
  166 | 
  167 | 
  168 | 
  169 | 
  170 |     })
  171 |     
  172 | 
  173 |     
  174 | 
  175 |     
```