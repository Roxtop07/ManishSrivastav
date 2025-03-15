import React from 'react'
import './Style.css'

const Experience = () => {
  return (
    <div className='custom-background h-full py-20'>
      <div className='w-3/4 mx-auto flex items-center'>
        <span className='text-slate-400'><i class="fa-solid fa-briefcase fa-2x"></i></span>
        <h1 className='ml-2 font-bold text-3xl'>Experience:</h1>
      </div>
      <div className='w-3/4 mx-auto flex mt-4'>
        <div className='flex flex-col items-center mx-2'>
            {/* Dot Top */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>

            {/* Vertical Line */}
            <span className='w-1 custom-lineColor h-[56.5%] cus-height'></span>

            {/* Dot Bottom */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>
        </div>
        <div className=''>
            <h2 className='text-xl font-semibold'>THESHOPIQ (PVT) LTD.</h2>
            <p className='custom-textColor'>July 2024 - Dec 2024</p>
            <p className='italic my-2'>Backend engineer</p>
            <ul className='list-disc list-outside space-y-2'>
                <li className='ml-10'>Developed RESTful APIs using AWS API Gateway.</li>
                <li className='ml-10'>Implemented serverless functions with AWS Lambda using Node.js and Python (Boto3).</li>
                <li className='ml-10'>Managed data storage and retrieval using Amazon DynamoDB.</li>
                <li className='ml-10'>Contributed to full-stack development with AWS services.</li>
                <li className='ml-10'>Utilized various LLM models under AWS Bedrock, including Meta LLaMA for chat and StableDiffusion 3 for image generation.</li>
                <li className='ml-10'>Monitored and optimized application performance and resource usage.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
