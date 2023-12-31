import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Works() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">hi! i&apos;m
        <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-green-300 bg-clip-text text-transparent"> mercedes</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">a groovy gal running off of Dr. Pepper + chaos.</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">all projects</h2>

      <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-pink-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-pink-300 via-pink-500 to-green-300 bg-clip-text text-transparent sm:text-center">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
