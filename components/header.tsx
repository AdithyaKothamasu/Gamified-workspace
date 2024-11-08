'use client'

// import { useState, useEffect } from 'react'
// import { Sparkles } from 'lucide-react'
import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Skeleton } from '@/components/ui/skeleton'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
// import { Input } from './ui/input'
// import { Label } from './ui/label'
// import toast from 'react-hot-toast'
import EmailForm from './email-form'


// const IframeWithSkeleton = () => {
//   const [iframeLoaded, setIframeLoaded] = useState(false);

//   useEffect(() => {
//     const iframe = document.getElementById('youtube-iframe') as HTMLIFrameElement;
//     if (iframe) {
//       const handleIframeLoad = () => {
//         setIframeLoaded(true);
//       };

//       iframe.addEventListener('load', handleIframeLoad);

//       return () => {
//         iframe.removeEventListener('load', handleIframeLoad);
//       };
//     }
//   }, []);

//   return (
//     <>
//       {!iframeLoaded && <Skeleton className="w-full max-w-2xl h-auto aspect-video" />}
//       <iframe
//         id="youtube-iframe"
//         src="https://www.youtube.com/embed/Q6jDdtbkMIU?si=YtgU89RhYiwt5-U5"
//         title="YouTube Video Player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         className={`w-full max-w-2xl h-auto aspect-video rounded-[6px] ${iframeLoaded ? '' : 'hidden'}`}
//       ></iframe>
//     </>
//   );
// };




export const Header = () => {
  return (
    <div className="space-y-20 mt-32">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="flex flex-col justify-center text-center ">
          <h2 className="text-4xl font-extrabold sm:text-6xl px-10">
           Your Virtual Workspace Reimagined
          </h2>
          <p className="mt-4 text-lg text-slate-500 px-20">
          Collaborate in real-time with your team in an interactive 2D space. Voice, video, and proximity chat make remote work feel natural.
          </p>
          <div className="flex justify-center  items-center mt-4">
            <Link href="/overview">
              {/* <Button className="gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Get Started</span>
              </Button> */}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center px-20 py-10 rounded-lg overflow-hidden">
          {/* <IframeWithSkeleton /> */}
          <EmailForm />
        </div>
      </div>
    </div>
  )
}
