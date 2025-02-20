export default function ContactSection() {
  return (
    <div className="bg-grey-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold font-main text-main">
            Contact HoopsConnect
          </h2>
          <p className="mt-2 text-4xl font-semibold font-main tracking-tight text-white sm:text-5xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg font-main text-grey-text">
            Have questions or need support? Our team is here to help you get the most out of HoopsConnect.
          </p>
        </div>
        {/* Contact Form */}
        <div className="mt-16">
          <form action="#" method="POST" className="mx-auto max-w-2xl space-y-6">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold font-main text-white">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 font-main text-white placeholder-grey-text focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold font-main text-white">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 font-main text-white placeholder-grey-text focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold font-main text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 font-main text-white placeholder-grey-text focus:outline-none focus:ring-2 focus:ring-main"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold font-main text-white">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 font-main text-white placeholder-grey-text focus:outline-none focus:ring-2 focus:ring-main"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold font-main text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 font-main text-white placeholder-grey-text focus:outline-none focus:ring-2 focus:ring-main"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-main px-4 py-2 text-sm font-semibold font-main text-white shadow hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
