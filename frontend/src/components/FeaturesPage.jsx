import { 
    UserIcon, 
    CalendarIcon, 
    UserGroupIcon, 
    BellIcon, 
    ChartBarIcon, 
    ChatBubbleLeftEllipsisIcon, 
    GlobeAltIcon 
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'User Profiles',
      description: 'Create and customize your personal profile to showcase your basketball skills and preferences.',
      icon: UserIcon,
    },
    {
      name: 'Game Scheduling',
      description: 'Plan and schedule your games easily using our intuitive calendar feature.',
      icon: CalendarIcon,
    },
    {
      name: 'Team Formation',
      description: 'Easily form teams and connect with fellow hoopers for pick-up games.',
      icon: UserGroupIcon,
    },
    {
      name: 'Real-Time Notifications',
      description: 'Stay informed with instant updates about game changes and community events.',
      icon: BellIcon,
    },
    {
      name: 'Interactive Stats',
      description: 'Track your performance and view detailed game statistics.',
      icon: ChartBarIcon,
    },
    {
      name: 'Community Forums',
      description: 'Engage with other players, share tips, and discuss strategies in our forums.',
      icon: ChatBubbleLeftEllipsisIcon,
    },
    {
      name: 'Global Events',
      description: 'Discover and participate in basketball events happening around the world.',
      icon: GlobeAltIcon,
    },
  ]
  
  export default function FeaturesPage() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Intro Section */}
            <div className="col-span-2">
              <h2 className="text-base font-semibold text-indigo-600">Discover Our Features</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Empowering HoopsConnect
              </p>
              <p className="mt-6 text-base text-gray-600">
                Experience a seamless platform designed for basketball enthusiasts. From personalized profiles to real-time notifications, explore all the tools that make HoopsConnect the ultimate community for hoopers.
              </p>
            </div>
            {/* Features List */}
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-0 h-5 w-5 text-indigo-500" />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  