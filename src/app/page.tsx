import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
    <FontAwesomeIcon icon={faBars} className='text-4xl' />
    </main>
      )
}
