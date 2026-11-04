import {test,expect} from '../../fixtures/hooks-fixtires'
import apiPathData from '../../testdata/api-path-data.json'
import restfulApiBookerData from '../../testdata/restful-api-booker-data.json'

// test('API Test',async({request})=>{

//     const bookingIDs=await request.get('booking')
//     console.log(await bookingIDs.json())
// })

// test('Api Test 2',async({request})=>{

//     const bookingDetails=await request.get('booking/1')
//     console.log(await bookingDetails.json())
// })


test('[Restful-Booker > Booking] Verify that user is able to fetch all the booking IDs ',{
    tag:["@API","@UAT"],
    annotation:{
        type:"Get API",
        description:"Get API from Booker"
    }
},async({request})=>{

    const bookingIdsResp =await request.get(apiPathData.booking_path);
    const bookingIdsJsonResp=await bookingIdsResp.json();
    console.log(bookingIdsJsonResp);

     expect(bookingIdsResp.status()).toBe(200);
     expect(bookingIdsResp.statusText()).toBe("OK");
     expect(bookingIdsResp.ok()).toBeTruthy()

     console.log(`the content-type ${bookingIdsResp.headers()["server"]}`)

     expect(bookingIdsResp.headers()["content-type"]).toBe(restfulApiBookerData.content_type);
     expect(bookingIdsJsonResp).not.toBeNull();



})  

test("Verify that user is able to fetch booking details",{
    tag:['@API'],
    annotation:{
        type:"Get Call",
        description:"Fetch from booking ID"
    }
},async({request})=>{

    // restful-booker is a shared public demo API - booking IDs like the old
    // hardcoded "12" can be overwritten by other people/test runs at any time.
    // Create our own booking first so this test owns the data it asserts on,
    // instead of asserting fixed values against state we don't control.
    const createResp = await request.post(apiPathData.booking_path, {
        data: restfulApiBookerData.create_booking
    })
    const createJsonResp = await createResp.json()
    const ownBookingId = createJsonResp.bookingid

    const bookingResp= await request.get(`${apiPathData.booking_path}/${ownBookingId}`)
    const bookingJsonResp=await bookingResp.json()
    console.log(bookingJsonResp)
    expect(bookingResp.status()).toBe(200)
    expect(bookingResp.statusText()).toBe("OK")
    expect(bookingResp).not.toBeNull()
    expect(bookingJsonResp.firstname).not.toBeNull()
    expect(bookingJsonResp).toMatchObject(restfulApiBookerData.create_booking)

})

test('Verify that user is able to create new booking using post api',
    {
        tag:['@API'],
        annotation:{
            type:'Post Api Call',
            description:'sending data through post API'
        }
    },async({request})=>{

       const createBookingResp= await request.post(apiPathData.booking_path,
            {
                data:restfulApiBookerData.create_booking
            })

       const createBookingJsonResp= await createBookingResp.json()
       expect(createBookingResp.status()).toBe(200)
       expect(createBookingJsonResp.booking).toMatchObject(restfulApiBookerData.create_booking)
       console.log(createBookingJsonResp.bookingid)
        
    })  

    test('verify that user is able to test put API and recieve valid res',
        {
            tag:['@API'],
            annotation:{
                type:'Put API',
                description:'Put Booker API'
            }
        },
        async({request,commonApiUtils})=>{

       const token=await commonApiUtils.createToken();

       const updateBookingResp=await request.put(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`,
                {
                    headers:{Cookie:`token=${token}`},
                    data:restfulApiBookerData.update_booking}
            )

            console.log(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`)

            console.log(`Token is ${token}`)
            
        const updateBookingRespJson=await updateBookingResp.json()
       console.log(updateBookingRespJson)
       expect(updateBookingResp.status()).toBe(200)
       expect(updateBookingResp.statusText()).toBe("OK")
       expect(updateBookingRespJson).toMatchObject(restfulApiBookerData.update_booking)




    })


    test('Verify that user can partially update the existing booking',
        {
            tag:['@UAT','@API'],
            annotation:{
                type:'Patch',
                description:'testing Patch'
            }
        },async({request,commonApiUtils})=>{

            const token=await commonApiUtils.createToken();
            const patchResponse=await request.patch(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`,{
                headers:{
                    Cookie:`token=${token}`,
                    
                },
                data:restfulApiBookerData.update_partial_booking
            })
            console.log(`${apiPathData.booking_path}/${restfulApiBookerData.booking_id2}`)
            console.log(restfulApiBookerData.update_partial_booking)
            const patchResponseJson=await patchResponse.json()
            console.log(patchResponse)
            console.log(patchResponseJson)
            

        }
        
    )

    test('verify that user is able to delete booking using delete API',{
        tag:['@UAT','@API'],
        annotation:{
            type:'Delete API',
            description:'Delete API from Booker'
        }
    },async({request,commonApiUtils})=>{
        const token=await commonApiUtils.createToken();

        // Deleting is not repeatable: a fixed booking ID (e.g. "4") only exists
        // to be deleted once - on every later run it's already gone, and
        // restful-booker returns 405 (not 404) for deleting a missing booking.
        // Create our own booking here so there is always something fresh to delete.
        const createResp = await request.post(apiPathData.booking_path, {
            data: restfulApiBookerData.create_booking
        })
        const ownBookingId = (await createResp.json()).bookingid

        const deleteBookingResp=await request.delete(`${apiPathData.booking_path}/${ownBookingId}`,{
            headers:{Cookie:`token=${token}`}
        })


        expect(deleteBookingResp.status()).toBe(201)
        expect(deleteBookingResp.statusText()).toBe("Created")

       const getBookingResp= await request.get(`${apiPathData.booking_path}/${ownBookingId}`)
       expect(getBookingResp.status()).toBe(404)
        expect(getBookingResp.statusText()).toBe("Not Found")





    })
    

    

    