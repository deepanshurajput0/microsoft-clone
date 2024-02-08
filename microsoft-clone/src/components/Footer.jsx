import React from 'react'

    const data1=['Microsoft 365',
      'Games',
      'Surface Pro 9',
      'Surface Laptop 5',
      'Surface Laptop Go 2',
      'Windows 11 apps']
    const data2=[
      'Microsoft Store',
      'Account profile',
      'Download Center',
     'Microsoft Store Support',
      'Returns',
      'Order tracking'
     ]
    const data3=[
      'Education',
      'Microsoft in education',
      'Devices for education',
      'Microsoft Teams for Education',
      'Microsoft 365 Education',
      'Office Education',
      'Educator training and development',
      'Deals for students and parents',
      'Azure for students'
     ]
   const  data4=[
      'Business',
'Microsoft Cloud',
'Microsoft Security',
'Azure',
'Dynamics 365',
'Microsoft 365',
'Microsoft Advertising',
'Microsoft Industry',
'Microsoft Teams',

     ]
 

const Footer = () => {
  return (
    <div className=' bg-gray-200 p-16 text-gray-600 text-[12px] mt-16'>
       <div className='  md:flex  justify-evenly'>
        <ul className=' space-y-5'>
          {
            data1.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>
        <ul  className=' space-y-5' >
        {
            data2.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>
        <ul  className=' space-y-5' >
        {
            data3.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>
        <ul  className=' space-y-5' >
        {
            data4.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>
       </div>
       <p className=' mt-10 text-center'>

Contact Microsoft Privacy Terms of use Trademarks About our ads © Microsoft 2024 

</p>
    </div>
  )
}

export default Footer