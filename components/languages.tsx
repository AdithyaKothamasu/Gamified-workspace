'use client'
import Marquee from 'react-fast-marquee'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useState } from 'react'

const languages = [
  {
    title: 'Interactive Space',
    description: 'Move freely in a 2D space with your custom avatar. Interact with teammates naturally.',
    className: 'w-36 h-auto aspect-square',
  },
  {
    title: 'Proximity Chat',
    description: 'Voice and video chat automatically trigger when you get close to teammates.',
    className: 'w-36 p-5 h-auto aspect-square'
  },
  {
    title: 'Team Messaging',
    description: 'Built-in text chat and conferencing for seamless communication.',
    className: 'w-48 px-5 h-auto aspect-square'
  },
]

export function Language() {
  const [speed] = useState(100);
  return (
    <section className="relative">
      <div className='flex flex-col justify-center text-center mb-20 px-10'>
        <h3 className="text-2xl text-primary font-extrabold sm:text-4xl px-20">Everything you need for remote teamwork</h3>
      </div>
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-background pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent to-background pointer-events-none z-10"></div>
      <Marquee speed={speed} autoFill>
        {languages.map((language, i) => (
          // <language.icon
          //   key={i}
          //   className={
          //     language.className +
          //     'text-foreground opacity-50 hover:opacity-100 transition duration-300 ml-32 cursor-pointer'
          //   }
          // />
          <Card key={i} className='mx-5 bg-transparent py-5'>
            <CardHeader>
              <CardTitle className='text-center'>{language.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {language.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </Marquee>
      
    </section>
  )
}
