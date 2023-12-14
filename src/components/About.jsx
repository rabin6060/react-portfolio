import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-4'>
          <h2 className='text-4xl font-semibold border-b-4 inline border-slate-400'>About</h2>
        </div>
        <p className='mt-10 text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi necessitatibus et asperiores tempora atque ex laboriosam? Non, labore distinctio placeat dolorum explicabo, eum temporibus magni possimus laborum exercitationem eius asperiores corrupti, eos assumenda! Aperiam soluta obcaecati tenetur mollitia sit. Possimus, deserunt non. Ullam nemo unde omnis ab eveniet iste accusantium.
        </p><br />
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laudantium dolorum illo excepturi fuga ex, ad fugit aliquid corrupti distinctio culpa dolor reprehenderit laboriosam modi officiis commodi saepe doloribus, eligendi amet. Odio iste doloribus dignissimos minus quasi quos possimus optio, doloremque magnam? Ratione beatae mollitia exercitationem tempora modi, eligendi ad?</p>
      </div>
    </div>
  )
}

export default About