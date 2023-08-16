'use client';

import { useOrigin } from "@/hooks/use-origin"
import {usePathname} from 'next/navigation'

export default function Home() {
  const origin = useOrigin();
  const pathname = usePathname()
  
  return (
    <div className="">
      {origin}
      <br />
      {pathname}
    </div>
    // <div className='bg-primary'>
    //   <h1 className='text-primary-foreground'>Hello Ahmed-m Portfolio</h1>
    // </div>
  )
}
