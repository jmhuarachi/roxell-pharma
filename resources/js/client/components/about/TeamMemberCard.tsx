import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  photo: string;
  bio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => (
  <motion.div
    className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg p-6 shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex-shrink-0">
      <img 
        src={member.photo} 
        alt={member.name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
        onError={(e) => {
          (e.target as HTMLImageElement); // .src = 'img/equipo.jpg';
        }}
      />
    </div>
    <div>
      <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
      <p className="text-blue-600 font-medium mb-3">{member.position}</p>
      <p className="text-gray-600">{member.bio}</p>
    </div>
  </motion.div>
);