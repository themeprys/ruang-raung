import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
      <Link href="/" className='aris_logo'>        
        <h1>Ruang Raung</h1>
        <p className='text-2xl'>Aris Setyawan Personal Blog</p>
        </Link>        
      </div>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
      <Link href="/writings" className="mx-3 font-bold hover:underline">Writings</Link>
      <Link href="/projects" className="mx-3 font-bold hover:underline">Projects</Link>
      <Link href="/music" className="mx-3 font-bold hover:underline">Music</Link>
      <Link href="/video" className="mx-3 font-bold hover:underline">Video</Link>            
      </div>
    </section>
  )
}
