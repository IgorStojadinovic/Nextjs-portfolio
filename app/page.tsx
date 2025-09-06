import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intor from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intor />
      <SectionDivider />
      <Skills />
{/*       <About /> */}
      <Projects />
{/*       <Experience /> */}
      <Contact />
    </main>
  );
}
