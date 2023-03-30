import Image from 'next/image';
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'

const teamMembers = [
  {
    name: 'Muhammad Faqiihuddin',
    position: 'CEO',
    image: '/assets/sample-person.jpg',
  },
  {
    name: 'Muhammad Khairul Anwar',
    position: 'Operation Manager',
    image: '/assets/khai.jpg',
  },
  {
    name: 'Muhammad Asyraf',
    position: 'Operation Manager',
    image: '/assets/sample-person.jpg',
  },
  {
    name: 'Muhammad Ikhwan',
    position: 'Financial Manager',
    image: '/assets/fm.jpg',
  },
  {
    name: 'Muhammad Najmi',
    position: 'Logistic & Human Resources',
    image: '/assets/sample-person.jpg',
  },
  {
    name: 'Muhammad Fareez Iqmal',
    position: 'Marketing Manager',
    image: '/assets/fareez-new.jpg',
  },
];
export default function About() {
  return (
    <Container className="pt-4 pb-12">
      <Text className={"ml-8"} variant="pageHeading">About us</Text>
      <p className={"text-2xl mx-8 max-w-screen-md font-light"} >At CHOCOH2O, we are passionate about offering the best of both worlds - delicious chocolate cake and refreshing mineral water to the students and faculty of IIUM campus. Our team takes pride in delivering top-quality products and exceptional service to ensure that our customers always leave satisfied.
      </p>
      <div className="mt-6 mx-8 grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5">
        {teamMembers.map((member) => (
          <div key={member.name} className="group">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <Image
                className="hover:scale-125 transition-all duration-500 cursor-pointer"
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

About.Layout = Layout
