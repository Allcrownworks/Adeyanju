
const Sensation = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Logo Link to Home */}
      <div className="mb-8">
        
      </div>

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Our Amazing Senses</h1>
        <p className="text-lg text-gray-600">How we experience the world around us</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Sensation?</h2>
        <p className="text-gray-700 mb-4">
          Sensation is how our body detects the world through special cells that respond to light, sound, touch, chemicals, and other stimuli.
        </p>
        <p className="text-gray-700">
          It's different from perception - sensation is the raw information, while perception is how our brain interprets it.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Vision Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">👁️</span>
            <h3 className="text-xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-700">
            Our eyes detect light and color. We have special cells called rods (for dark/light) and cones (for color).
          </p>
        </div>

        {/* Hearing Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">👂</span>
            <h3 className="text-xl font-semibold">Hearing</h3>
          </div>
          <p className="text-gray-700">
            Our ears detect sound vibrations. Tiny hair cells in our inner ear move with sound waves.
          </p>
        </div>

        {/* Touch Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">✋</span>
            <h3 className="text-xl font-semibold">Touch</h3>
          </div>
          <p className="text-gray-700">
            Our skin has different sensors for pressure, temperature, and pain. Fingertips are most sensitive.
          </p>
        </div>

        {/* Taste Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">👅</span>
            <h3 className="text-xl font-semibold">Taste</h3>
          </div>
          <p className="text-gray-700">
            Taste buds detect 5 basic flavors: sweet, salty, sour, bitter, and umami (savory).
          </p>
        </div>

        {/* Smell Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">👃</span>
            <h3 className="text-xl font-semibold">Smell</h3>
          </div>
          <p className="text-gray-700">
            Our nose detects chemicals in the air. Smell is closely connected to memory.
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-400">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🔄</span>
            <h3 className="text-xl font-semibold">Balance</h3>
          </div>
          <p className="text-gray-700">
            Fluid in our inner ear helps us sense movement and maintain balance.
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto bg-blue-50 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Fun Fact</h2>
        <p className="text-gray-700">
          Our senses work together! For example, much of what we think is taste actually comes from smell.
          That's why food seems flavorless when you have a cold.
        </p>
      </section>
    </div>
  );
};

export default Sensation;