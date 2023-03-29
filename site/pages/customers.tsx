import Image from 'next/image';
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'

const images = [
  '/assets/customers/IMG_8672.JPG',
  '/assets/customers/IMG_8685.JPG',
  '/assets/customers/IMG_8688.JPG',
  '/assets/customers/IMG_8679.JPG',
];
export default function About() {
  return (
    <Container className="pt-4 pb-12">
      <Text className={"ml-12 mb-4"} variant="pageHeading">Our Customers</Text>
      <p className={"mx-12 mb-8 text-2xl font-light max-w-screen-md"}>At CHOCOH2O, our customers are at the heart of everything we do. We take pride in providing the highest quality chocolate cakes and mineral water to the students and faculty of IIUM campus, and nothing makes us happier than seeing our customers enjoy our products.</p>
      <div className="grid grid-cols-1 px-12 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image} className="group">
            <div className="flex justify-center aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <Image
                className="hover:scale-125 transition-all duration-500 cursor-pointer"
                src={image}
                alt={image}
                width={500}
                height={600}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

About.Layout = Layout
