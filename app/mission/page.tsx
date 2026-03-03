import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  return (
    <div className="py-20">
      <SectionHeading title="Mission & Vision" />
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
            <p className="text-lg">
              To foster a collaborative community that promotes learning, research, and innovation 
              in quantum computing. We aim to make quantum concepts accessible to students from all 
              academic disciplines and build a foundation for the next generation of quantum scientists.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
            <p className="text-lg">
              To become a leading student-led quantum computing community that bridges the gap 
              between academic theories and practical applications, preparing members for careers 
              in the rapidly evolving field of quantum technologies.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Core Values</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Innovation</h4>
              <p className="text-gray-300 mb-4">
                We embrace cutting-edge ideas and technologies, encouraging members to explore new 
                approaches to quantum computing challenges.
              </p>
              
              <h4 className="text-xl font-semibold mb-2 text-white">Collaboration</h4>
              <p className="text-gray-300 mb-4">
                We believe that diverse perspectives lead to breakthrough innovations, fostering an 
                environment where interdisciplinary collaboration thrives.
              </p>
              
              <h4 className="text-xl font-semibold mb-2 text-white">Accessibility</h4>
              <p className="text-gray-300">
                We are committed to making quantum computing concepts accessible to all students, 
                regardless of their background or prior experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Excellence</h4>
              <p className="text-gray-300 mb-4">
                We strive for excellence in all our endeavors, maintaining high standards for our 
                educational content, projects, and events.
              </p>
              
              <h4 className="text-xl font-semibold mb-2 text-white">Mentorship</h4>
              <p className="text-gray-300 mb-4">
                We support each other's growth through mentorship, creating a supportive environment 
                where knowledge is freely shared.
              </p>
              
              <h4 className="text-xl font-semibold mb-2 text-white">Impact</h4>
              <p className="text-gray-300">
                We aim to make a meaningful impact on the field of quantum computing and prepare our 
                members to be leaders in this transformative technology.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}