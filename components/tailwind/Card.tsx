/* eslint-disable @next/next/no-img-element */
export interface ICard {
  props: {
    id: number
    name: string
    slug: string
    bio: string
  }
}

// ---------------------------------------------------------------------------

const Card: React.FC<ICard> = ({ props }) => {
  const { name, slug, bio } = props
  return (
    <article className="block rounded-lg shadow-lg bg-white max-w-sm m-3 hover:scale-110 hover:shadow-xl transition ease-in-out duration-300">
      <img
        className="h-72 w-full inline-flex items-center justify-center bg-orange-600 rounded-t-2xl"
        src={`http://pixelprowess.com/i/stargazers/${slug}.svg`}
        alt={name}
      />
      <div className="w-full p-6 text-center">
        <h3 className="px-4 text-4xl mt-3 mb-2 font-black text-gray-700 tracking-tight">
          {name}
        </h3>
        <p className="px-4 text-xl font-light text-gray-500">{bio}</p>
        <a
          href="#"
          className="inline-block mx-auto bg-indigo-500 text-white hover:bg-indigo-600 my-3 block py-3 px-6 border border-transparent rounded-md text-center font-medium"
        >
          More Info
        </a>
      </div>
    </article>
  )
}

export default Card
