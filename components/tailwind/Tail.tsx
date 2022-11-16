/* eslint-disable react/no-unescaped-entities */

import Card from "./Card"

/* eslint-disable @next/next/no-img-element */
const Tail = () => {
  const cast = [
    {
      id: 0,
      name: 'Aneirin',
      slug: 'aneirin',
      bio: 'Aneirin is the foremost expert of cold climates in planetoids universe-wide, with a particular inquisitiveness in areas colder than -300 F.',
    },
    {
      id: 1,
      name: 'Celestia Dristi',
      slug: 'celestia-dristi',
      bio: 'Helps individuals and companies to improve personal and  professional agility and growth in technology and systems.',
    },
    {
      id: 2,
      name: 'Charmaine',
      slug: 'charmaine',
      bio: 'Charmaine loves fossils from every society and planet, and helping to piece together the stories they tell of an earlier time.',
    },
    {
      id: 3,
      name: 'Emmyloo Em',
      slug: 'emmyloo-em',
      bio: 'She claims that  her devotion to lexicography began as early as two years old, when she spoke her first full sentence.',
    },
    {
      id: 4,
      name: 'Gill',
      slug: 'gill',
      bio: 'Carries on generations as a hydrologist specializing in  underground reservoirs of aquatic-based planetoids.',
    },
    {
      id: 5,
      name: 'Ichabod',
      slug: 'ichabod',
      bio: 'Operations supervisor Ichabod is unwavering in adherence to the perfection of order and function.',
    },
    {
      id: 6,
      name: 'Laverne',
      slug: 'laverne',
      bio: 'Pursued understanding relationships among dissimilar measurable quantities at Quantumnus U.',
    },
    {
      id: 7,
      name: 'Mindigo',
      slug: 'mindigo',
      bio: 'Earned the nickname “MindiGoGo” because of her tireless work in advanced travel and commodity conveyance.',
    },
    {
      id: 8,
      name: 'Nalda',
      slug: 'nalda',
      bio: 'Began work as a mind reader and universal translator when founding Interplanetary Understanders and Lie Detectors.',
    },
    {
      id: 9,
      name: 'Narf the Fourth',
      slug: 'narf-the-fourth',
      bio: 'Known to friends as Norf, oversees the manufacturing of astronomic spaceship  accessories at Saucer & Rocket, Inc.',
    },
    {
      id: 10,
      name: 'Portman',
      slug: 'portman',
      bio: 'No one loves animals, critters, varmints, and beasties as much as Dr. Portman, whether they are  wild or a beloved pet.',
    },
    {
      id: 11,
      name: 'Seymour',
      slug: 'seymour',
      bio: "If it isn't counted, it doesn't count! is the mantra Seymour originated and propagated in the industry of inventory control.",
    },
    {
      id: 13,
      name: 'Trisaphron',
      slug: 'trisaphron',
      bio: 'Earned a masters degree in practical operations after completing a bachelors of science in impractical mathematics.',
    },
    {
      id: 14,
      name: 'Two',
      slug: 'two',
      bio: 'With growing interest by organizations, Two finds  that it is increasingly critical to focus on sustainability.',
    },
    {
      id: 15,
      name: 'Violette',
      slug: 'violette',
      bio: 'Violette holds a doctorate in Planetary Behaviorism. She has been fascinated in researching the behavior of sentient beings.',
    },
  ]

  return (
    <div>
      <div className="flex w-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-indigo-500 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-8xl">
          StarGazers
        </h2>
        <p className="mt-6 text-center max-w-2xl text-xl text-gray-500">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        <div className="w-full flex mt-5 snap-x snap-mandatory flex-wrap justify-center">
          {cast.map((item) => <Card props={item} key={item.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Tail
