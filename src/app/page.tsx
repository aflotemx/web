import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
    <FontAwesomeIcon icon={faFontAwesome} className='text-9xl bg-green-400' />
    </main>
      )
}
