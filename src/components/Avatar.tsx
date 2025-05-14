import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar className="w-[300px] h-[300px]">
      <AvatarImage className="object-cover" src="/images/profile.jpeg" alt="rodrigo-pardo-profile" />
    </Avatar>
  );
}
