

import profile from "../assets/images/profile.png";
import check_img from "../assets/svg/check.svg";
import profile_avatar from "../assets/svg/avatar.svg";
function Profile() {
  return (
    <div className="flex justify-start items-center gap-2 pb-20">
     
     <div className="relative">
     <img src={profile} alt="profile" className="size-16" />
     <div className="size-4 absolute right-0 bottom-0 bg-primary500 border-[3px] border-white rounded-full"></div>
     </div>
      <div className="space-y-2">
        <div className="flex gap-6">
          <p className="text-xl">Josiah Oromojo</p>
          <img src={check_img} alt="profile" />
        </div>

        <p className="flex items-center justify-center gap-2">
          <img src={profile_avatar} alt="avatar" />{" "}
          <span className="text-xs text-gray-400">Account 2063834</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
