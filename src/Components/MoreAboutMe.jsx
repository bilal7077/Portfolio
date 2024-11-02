import React from 'react';

const MoreAboutMe = () => {
  return (
    <div id='about' className="flex flex-col items-center justify-center mt-[60px] min-h-screen bg-sky-950 p-8">
      <h1 className="text-4xl text-white font-bold mb-8">More About Me</h1>

      {/* Education and Details Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 bg-sky-950 md:grid-cols-2 gap-8">
        {/* Left Side - Education & Information */}
        <div className="space-y-8 bg-sky-950">
          <div className="p-6 text-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-">B.A. in Graphic Design from XYZ University</p>
            <p className="text-white">M.A. in Visual Communication from ABC University</p>
          </div>

          {/* Main heading and text for 3 elements */}
          <div className="p-6 bg-sky-950 shadow-lg rounded-lg">
            <h2 className="text-2xl text-white font-semibold mb-4">About My Journey</h2>
            <p className="text-white">1. Passionate about crafting meaningful designs that resonate with users.</p>
            <p className="text-white">2. Over 5 years of experience in the design industry working with diverse clients.</p>
            <p className="text-white">3. Constant learner, continuously improving my skills in UI/UX and design tools.</p>
          </div>
        </div>

        {/* Right Side - Skills Chart */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
          <div className="space-y-4">
            {/* Skill 1 */}
            <div>
              <p className="text-gray-700">Adobe Photoshop</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div>
              <p className="text-gray-700">Adobe Illustrator</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div>
              <p className="text-gray-700">Figma</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div>
              <p className="text-gray-700">Sketch</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Skill 5 */}
            <div>
              <p className="text-gray-700">UI/UX Design</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Skill 6 */}
            <div>
              <p className="text-gray-700">HTML & CSS</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Skill 7 */}
            <div>
              <p className="text-gray-700">JavaScript</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
