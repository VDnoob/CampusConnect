import { Avatar, Typography } from "@mui/material";

export default function MembersList() {
  const totalMembers = 61353;
  const membersData = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      avatarUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aqiOJcpx_YhSCqXCGVNZHgHaEK%26pid%3DApi&f=1&ipt=14f22819a8b73bd2d74c12fae68fe9850f91f8065a79dd0f85320ed52d443a2c&ipo=images",
    },
    {
      id: 2,
      name: "Kylian Mbappe",
      avatarUrl:
        "https://i.pinimg.com/originals/ed/4c/39/ed4c39fb53c8b04fee674fe5567d43b1.jpg",
    },
    {
      id: 3,
      name: "Diego Maradona",
      avatarUrl:
        "https://icdn.football-espana.net/wp-content/uploads/2020/11/lionel-messi-diego-maradona-argentina_1j1j0ygqlzl3416f0anf0u5zlu.jpg",
    },
    {
      id: 4,
      name: "Narendra Modi",
      avatarUrl:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2015-05/05/full/1430823912-5957.jpg",
    },
    {
      id: 5,
      name: "Arvind Kejriwal",
      avatarUrl:
        "https://indianmemetemplates.com/wp-content/uploads/Arvind-Kejriwal-wearing-floral-crown-843x1024.jpg",
    },
    {
      id: 6,
      name: "Rahul Gandhi",
      avatarUrl: "https://i.ytimg.com/vi/jwrhqGqowyU/maxresdefault.jpg",
    },
    {
      id: 7,
      name: "Imran Khan",
      avatarUrl:
        "https://static.toiimg.com/photo/msid-76340696,imgsize-37436/76340696.jpg",
    },
    {
      id: 8,
      name: "Elon Musk",
      avatarUrl:
        "https://cdn.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg",
    },
    {
      id: 9,
      name: "Mark Zuckerberg",
      avatarUrl:
        "https://api.time.com/wp-content/uploads/2016/01/ap_794116323555.jpg",
    },
    {
      id: 10,
      name: "Jeff Bezos",
      avatarUrl:
        "https://www.channelnews.com.au/wp-content/uploads/2021/05/bezos.jpg",
    },
  ];

  return (
    <div className="w-[100%] bg-[#f5f5f5] mt-[10px] border-[1px] border-solid rounded-[7px] overflow-auto max-h-96 relative">
      <p className="font-medium font-sans text-lg ml-[15px] mt-[10px]">
        {totalMembers.toLocaleString()} members
      </p>

      {membersData.map((member) => (
        <div className="flex flex-row items-center m-[5px]">
          <Avatar
            key={member.id}
            className="m-[5px]"
            src={member.avatarUrl}
            alt={member.name}
            sx={{ width: 36, height: 36 }}
          />
          <p className="font-sans font-normal text-lg pl-[15px]">
            {member.name}
          </p>
        </div>
      ))}
    </div>
  );
}
