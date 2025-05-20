import { Avatar, AvatarImage } from "./ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar className="w-[150px] h-[150px] border-2 border-secondary">
      <AvatarImage
        className="object-cover"
        src="/portafolio/images/profile.jpeg"
        alt="rodrigo-pardo-profile"
      />
    </Avatar>
  );
}
