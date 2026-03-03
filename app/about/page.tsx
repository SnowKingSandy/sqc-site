import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-20">
      <SectionHeading title="About Us" />
      
      <Card className="bg-gray-900/50 border-gray-800 mb-10">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Story</h3>
          <p className="mb-6 text-lg">
            Symbiosis Quantum Club is a student-led initiative dedicated to exploring 
            and advancing the field of quantum computing. Founded in 2023, our club brings 
            together passionate students from diverse academic backgrounds who share 
            a common interest in quantum technologies.
          </p>
          <p className="text-lg">
            We organize workshops, seminars, and hands-on projects to help members gain practical 
            experience with quantum computing frameworks like Qiskit and Q#. Our community serves 
            as a bridge between theoretical classroom knowledge and real-world quantum applications.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">What We Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Organize workshops on quantum programming and algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Host guest lectures from industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Conduct hands-on projects with quantum computing frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Participate in quantum hackathons and competitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Build a community of quantum computing enthusiasts</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Join Us</h3>
            <p className="mb-4">
              We welcome students from all academic backgrounds who are interested in quantum 
              computing. No prior experience is required - just curiosity and enthusiasm!
            </p>
            <p className="mb-4">
              Membership benefits include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Access to our workshops and learning resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Opportunities to work on quantum computing projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span> 
                <span>Networking with like-minded peers and industry professionals</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}