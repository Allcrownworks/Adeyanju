import { Link } from 'react-router-dom';
import logo from "./logo.png";

const HolySpirit = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Logo Link to Home */}
      <div className="mb-8">
        
      </div>

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">The Holy Spirit</h1>
        <p className="text-lg text-gray-600">God's Presence and Power in Our Lives</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who is the Holy Spirit?</h2>
        <p className="text-gray-700 mb-4">
          The Holy Spirit is God Himself, the third person of the Trinity, who lives within believers,
          guides us into truth, comforts us, and empowers us for Christian living and service.
        </p>
        <p className="text-gray-700">
          Jesus promised His disciples: "I will ask the Father, and he will give you another Helper,
          to be with you forever, even the Spirit of truth" (John 14:16-17).
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Roles Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🕊️</span>
            <h3 className="text-xl font-semibold">Roles of the Spirit</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Convicts the world of sin</li>
            <li>Regenerates believers</li>
            <li>Indwells every Christian</li>
            <li>Seals us for salvation</li>
            <li>Fills us with power</li>
            <li>Distributes spiritual gifts</li>
          </ul>
        </div>

        {/* Fruits Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🍇</span>
            <h3 className="text-xl font-semibold">Fruit of the Spirit</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <div>Love</div>
            <div>Joy</div>
            <div>Peace</div>
            <div>Patience</div>
            <div>Kindness</div>
            <div>Goodness</div>
            <div>Faithfulness</div>
            <div>Gentleness</div>
            <div>Self-control</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Galatians 5:22-23</p>
        </div>

        {/* Gifts Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🎁</span>
            <h3 className="text-xl font-semibold">Spiritual Gifts</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <div>Wisdom</div>
            <div>Knowledge</div>
            <div>Faith</div>
            <div>Healing</div>
            <div>Miracles</div>
            <div>Prophecy</div>
            <div>Discernment</div>
            <div>Tongues</div>
            <div>Interpretation</div>
            <div>Service</div>
            <div>Teaching</div>
            <div>Encouragement</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">1 Corinthians 12, Romans 12, Ephesians 4</p>
        </div>

        {/* Pentecost Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🔥</span>
            <h3 className="text-xl font-semibold">Pentecost</h3>
          </div>
          <p className="text-gray-700">
            The dramatic outpouring of the Holy Spirit described in Acts 2, when the Spirit empowered
            the disciples to preach the gospel boldly, resulting in 3,000 conversions.
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto bg-purple-50 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-3">Biblical Promise</h2>
        <p className="text-gray-700 italic">
          "And I will ask the Father, and he will give you another Helper, to be with you forever,
          even the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him.
          You know him, for he dwells with you and will be in you." - John 14:16-17
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Be Filled with the Spirit</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>Believe in Jesus Christ as your Savior</li>
          <li>Ask God to fill you with His Spirit (Luke 11:13)</li>
          <li>Yield control of your life to God</li>
          <li>Walk in obedience to God's Word</li>
          <li>Maintain regular prayer and worship</li>
        </ol>
      </section>
    </div>
  );
};

export default HolySpirit;