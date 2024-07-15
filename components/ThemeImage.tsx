import Image from 'next/image'

interface ThemeImageProps {
  alt: string
  srcLight: string
  srcDark: string
  width: number
  height: number
}
export const ThemeImage = ({ alt, srcLight, srcDark, width, height }: ThemeImageProps) => {
  return (
    <figure className='my-4'>
      <Image
        className='block rounded-xl border border-gray-200 dark:hidden'
        alt={alt}
        src={srcLight}
        width={width}
        height={height}
      />
      <Image
        className='hidden rounded-xl border border-gray-800 dark:block'
        alt={alt}
        src={srcDark}
        width={width}
        height={height}
      />
    </figure>
  )
}
