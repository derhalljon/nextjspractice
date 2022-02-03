import Image from 'next/image'

const error_avocado = () => (
    <div>
      <ViewSource pathname="../images/error_avocado.jpeg" />
      <h1>Image Component With Color Data URL</h1>
      <Image
        alt="Error"
        src="../images/error_avocado.jpeg"
        width={500}
        height={600}
        layout={`responsive`}
      />
    </div>
  )

export default function Custom404() {
    return ( <h1>404 - Page Not Found</h1>,
     <Image error_avocado />
    )
}

