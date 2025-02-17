import { MagnifyingGlassIcon, UserGroupIcon, BellIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Find Your Team',
    description:
      'Connect with local hoopers, build your crew, and create a winning team for pick-up games.',
    href: '#',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Join Pick-Up Games',
    description:
      'Discover local games near you—whether you’re a beginner or a pro, there’s a spot waiting for you.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Community Insights',
    description:
      'Stay updated with the latest trends, events, and inspiring stories from the world of basketball.',
    href: '#',
    icon: BellIcon,
  },
]

export default function AboutSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">About HoopsConnect</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            Connecting Hoop Enthusiasts Everywhere
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            At HoopsConnect, our passion is uniting basketball lovers. Our platform helps you find teammates, join local pick-up games, and stay inspired by the community—all in one place.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
